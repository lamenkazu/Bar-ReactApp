import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Container,
  InputWrapper,
  SelectWrapper,
  ButtonsWrapper,
  DivisoryOne,
  DivisoryTwo,
  StyledButton,
} from "./styles";

import { Input } from "../../components/Input";
import { GoBack } from "../../components/GoBack";
import { Select } from "../../components/Select";

import { PiCaretLeft } from "react-icons/pi";
import { useProducts } from "../../hooks/producst";

interface ProductProps {
  id: string;
  name: string;
  price: string;
  category: string;
  createdBy: string;
  createdAt: string;
  updatedBy: string;
  updatedAt: string;
}

interface ProductsFormProps {
  confirmMessage?: string;
  pageTitle?: string;
  isNew?: boolean;
  productData?: ProductProps;
}

export const ProductForm = ({
  confirmMessage = "Confirma que os dados estão corretos para salvar?",
  pageTitle = "Novo prato",
  isNew = false,
  productData = {
    id: "",
    name: "",
    price: "",
    category: "",
    createdBy: "",
    createdAt: "",
    updatedBy: "",
    updatedAt: "",
  },
}: ProductsFormProps) => {
  const navigate = useNavigate();

  const { createNewProduct } = useProducts();

  const [form, setForm] = useState<ProductProps>(productData);
  const {
    id,
    name,
    price,
    category,
    createdBy,
    createdAt,
    updatedAt,
    updatedBy,
  } = form;

  const isFormEmpty = () => {
    return !name || !category || !price;
  };

  const handleFormChanges = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //Lida com o retorno à pagina anterior.
  const handleGoBack = () => {
    navigate(-1);
  };

  const handleCreate = async () => {
    const newProduct = {
      name,
      category,
      price: Number(price),
    };

    if (confirm(confirmMessage)) {
      await createNewProduct(newProduct).then(() => {
        setForm({ ...form, name: "", category: "", price: "" });
      });
    }
  };

  const handleUpdate = async () => {
    console.log(form);
  };

  const handleDeleteProduct = async () => {};

  const decideSave = isNew ? handleCreate : handleUpdate;

  useEffect(() => {
    if (!isNew) {
      setForm(productData);
    }
  }, [productData]);
  return (
    <Container>
      <GoBack onClick={handleGoBack}>
        <PiCaretLeft />
        <p>voltar</p>
      </GoBack>
      <InputWrapper>
        {
          //GoBack -> Botão para voltar para a página anterior
        }

        <h1>{pageTitle}</h1>

        <DivisoryOne>
          <Input
            lbl="Nome"
            id="name"
            placeholder="Ex.: Salada Ceasar"
            name="name"
            value={form.name}
            onChange={handleFormChanges}
          />

          {
            //SelectWrapper -> Input Select de Categoria
          }
          <SelectWrapper>
            <label htmlFor="category">Categoria</label>
            <Select
              name="category"
              id="category"
              onChange={handleFormChanges}
              value={form.category}
            />
          </SelectWrapper>
        </DivisoryOne>

        <DivisoryTwo>
          {
            //MarkerWrapper -> Input de tags de ingredientes
          }

          <Input
            lbl="Preço"
            id="price"
            placeholder="R$ 00,00"
            name="price"
            type="number"
            value={form.price}
            onChange={handleFormChanges}
          />
        </DivisoryTwo>
        {
          //TextareaWrapper -> Input da descrição do prato
        }

        {
          //Botão para salvar prato no banco de dados
        }
        <ButtonsWrapper>
          {!isNew && (
            <StyledButton
              contra
              title="Excluir prato"
              onClick={handleDeleteProduct}
            />
          )}
          <StyledButton
            loading={isFormEmpty()}
            title="Salvar alterações"
            onClick={decideSave}
          />
        </ButtonsWrapper>
      </InputWrapper>
    </Container>
  );
};
