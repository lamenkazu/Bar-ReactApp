import { ChangeEvent, useEffect, useState } from "react";
import { useProducts } from "../../hooks/producst";

import {
  ProductIndexSearch,
  ProductListProps,
  ProductProps,
} from "../../@types/products";
import { Order } from "../../@types/sales";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Container,
  SearchWrapper,
  Search,
  FilterWrapper,
  InputWrapper,
  Products,
  Command,
  ProductsWrapper,
  ProductSection,
  Payment,
  TotalPrice,
  ButtonWrapper,
} from "./styles";

import { Button } from "../../components/Button";
import { Empty } from "../../components/Empty";
import { Stepper } from "../../components/Stepper";
import { PayMethodSelect } from "../../components/PayMethodSelect";

import { PiMagnifyingGlassThin } from "react-icons/pi";

import { drinkOptions, SelectOption } from "../../utils/categoryOptions";
import { useSales } from "../../hooks/sales";
import { useNavigate } from "react-router-dom";

interface SaleOrderProps {
  data: Order;
}

export const SaleOrder = ({ data }: SaleOrderProps) => {
  const navigate = useNavigate();
  const { getProducts } = useProducts();
  const { updateOrder, finalizeOrder } = useSales();

  const [selectedOption, setSelectedOption] = useState<string>("");
  const [productsData, setProductsData] = useState<ProductListProps>();

  const [search, setSearch] = useState({
    name: "",
    category: "",
  } as ProductIndexSearch);

  const [order, setOrder] = useState<Order>({
    created_by: "",
    id: "",
    method: "",
    products: [],
    total: 0,
    updated_by: "",
  } as Order);

  const handleIncludeProduct = (product: ProductProps) => {
    setOrder((prevState) => {
      const updatedProducts = [
        ...prevState.products,
        {
          id: product.id,
          quantity: 1,
          name: product.name,
          price: Number(product.price),
        },
      ];

      const updatedOrder: Order = {
        ...prevState,
        products: updatedProducts,
        total: prevState.total + Number(product.price),
      };

      return updatedOrder;
    });
  };

  const handleFormChanges = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  const handleSaveOrder = async () => {
    await updateOrder(order).then(() => {
      toast("Atualizado com sucesso!", {
        position: "bottom-right", // Posição do toast
        autoClose: 2000, // Tempo em milissegundos para fechar automaticamente
        hideProgressBar: false, // Ocultar a barra de progresso
        closeOnClick: true, // Fechar o toast ao clicar nele
        pauseOnHover: true, // Pausar fechamento ao passar o mouse
        draggable: true, // Permitir arrastar o toast
      });
    });
  };

  const handleFinalizeOrder = async () => {
    await finalizeOrder({ method: selectedOption, id: order.id }).then(() => {
      toast("Venda finalizada", {
        position: "bottom-right", // Posição do toast
        autoClose: 2000, // Tempo em milissegundos para fechar automaticamente
        hideProgressBar: false, // Ocultar a barra de progresso
        closeOnClick: true, // Fechar o toast ao clicar nele
        pauseOnHover: true, // Pausar fechamento ao passar o mouse
        draggable: true, // Permitir arrastar o toast
      });
      setTimeout(() => {
        navigate("/");
      }, 2500);
    });
  };

  useEffect(() => {
    const fetchProdutcs = async () => {
      await getProducts({ name: search.name, category: search.category }).then(
        (response) => {
          setProductsData(response);
        }
      );
    };

    if (data.id !== order.id) {
      setOrder(data);
      setSelectedOption("");
    }

    fetchProdutcs();
  }, [search, order, data]);

  return (
    <Container>
      <ToastContainer />

      <ProductSection>
        <SearchWrapper>
          <Search>
            <PiMagnifyingGlassThin />
            <label className="srOnly" htmlFor="search">
              Pesquisar Produto
            </label>
            <input
              type="text"
              name="name"
              id="search"
              value={search.name}
              onChange={handleFormChanges}
            />
          </Search>

          <FilterWrapper>
            <InputWrapper>
              <input
                type="radio"
                name="productGroup"
                id="productName"
                checked
                onChange={() => {}}
              />
              <label htmlFor="productName">Pesquisar por nome</label>
            </InputWrapper>

            <select
              name="category"
              onChange={handleFormChanges}
              value={search.category}
            >
              {drinkOptions.map((option: SelectOption) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {/* 
            <InputWrapper>
              <input
                type="radio"
                name="productGroup"
                id="productPrice"
                disabled
              />
              <label htmlFor="productPrice">Pesquisar por preço</label>
            </InputWrapper> */}
          </FilterWrapper>
        </SearchWrapper>

        <Products>
          <ul>
            {productsData?.products
              .filter(
                (product) =>
                  !order.products?.some(
                    (orderProduct) => orderProduct.id === product.id
                  )
              )
              .map((product: ProductProps) => (
                <li key={`${product.id}`}>
                  {product.name}
                  <Button
                    title="Incluir"
                    onClick={() => {
                      handleIncludeProduct(product);
                    }}
                  />
                </li>
              ))}
          </ul>
        </Products>
      </ProductSection>

      <Command>
        <ProductsWrapper>
          <h1>Comanda</h1>
          <Products>
            <ul>
              {order.products?.map((product, index) => (
                <li key={product.id}>
                  {product.name}
                  <Stepper
                    amount={order.products[index].quantity}
                    onChange={setOrder}
                    position={index}
                  />
                </li>
              ))}
            </ul>
          </Products>
        </ProductsWrapper>

        <Payment>
          <TotalPrice>R$ {order.total}</TotalPrice>
          <PayMethodSelect
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </Payment>

        <ButtonWrapper>
          <Button title="Salvar" onClick={handleSaveOrder} />
          <Empty />
          <Button
            title="Finalizar"
            contra
            loading={selectedOption === ""}
            onClick={handleFinalizeOrder}
          />
        </ButtonWrapper>
      </Command>
    </Container>
  );
};
