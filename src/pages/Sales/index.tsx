import { useState } from "react";
import {
  Container,
  OpenSales,
  SaleOrder,
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
  CustomSelect,
  DropdownButton,
  IconWrapper,
  Option,
  OptionsList,
} from "./styles";

import { Button } from "../../components/Button";
import { Empty } from "../../components/Empty";

import { CiBookmarkPlus } from "react-icons/ci";
import { PiMagnifyingGlassThin } from "react-icons/pi";
import { SiPix } from "react-icons/si";
import { MdKeyboardArrowRight } from "react-icons/md";

import { drinkOptions, SelectOption } from "../../utils/categoryOptions";
import { AiOutlineCreditCard, AiOutlineDollar } from "react-icons/ai";
import { Stepper } from "../../components/Stepper";
import { ProductCard } from "../../components/ProductCard";

export const Sales = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <Container>
      <ProductSection>
        <SearchWrapper>
          <Search>
            <PiMagnifyingGlassThin />
            <label className="srOnly" htmlFor="search">
              Pesquisar Produto
            </label>
            <input type="text" name="search" id="search" />
          </Search>

          <FilterWrapper>
            <InputWrapper>
              <input
                type="radio"
                name="productGroup"
                id="productName"
                checked
              />
              <label htmlFor="productName">Pesquisar por nome</label>
            </InputWrapper>

            <select>
              {drinkOptions.map((option: SelectOption) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <InputWrapper>
              <input type="radio" name="productGroup" id="productPrice" />
              <label htmlFor="productPrice">Pesquisar por preço</label>
            </InputWrapper>
          </FilterWrapper>
        </SearchWrapper>

        <Products>
          <ul>
            <li>
              Brahma Latão <Button title="Incluir" />
            </li>
          </ul>
        </Products>
      </ProductSection>

      <Command>
        <ProductsWrapper>
          <h1>Comanda</h1>
          <Products>
            <ul>
              <li>
                Brahma Latão <Stepper />
              </li>
              <li>
                Heineken 600 ml <Stepper />
              </li>
              <li>
                Heineken 330 ml <Stepper />
              </li>
              <li>
                Guaraná Antartica lata 350 ml <Stepper />
              </li>
              <li>
                Lucky Strike Vermelho maço <Stepper />
              </li>
            </ul>
          </Products>
        </ProductsWrapper>

        <Payment>
          <TotalPrice>R$ 00,00</TotalPrice>

          <CustomSelect>
            <DropdownButton onClick={() => setIsOpen(!isOpen)}>
              {selectedOption === "" && (
                <IconWrapper>
                  Pagamento
                  <MdKeyboardArrowRight size={24} />
                </IconWrapper>
              )}

              {selectedOption === "Pix" && (
                <IconWrapper>
                  <SiPix size={24} />
                  <MdKeyboardArrowRight size={24} />
                </IconWrapper>
              )}
              {selectedOption === "Dinheiro" && (
                <IconWrapper>
                  <AiOutlineDollar size={24} />
                  <MdKeyboardArrowRight size={24} />
                </IconWrapper>
              )}
              {selectedOption === "Cartão Débito" && (
                <IconWrapper>
                  <AiOutlineCreditCard size={24} />
                  Débito
                  <MdKeyboardArrowRight size={24} />
                </IconWrapper>
              )}
              {selectedOption === "Cartão Crédito" && (
                <IconWrapper>
                  <AiOutlineCreditCard size={24} />
                  Crédito
                  <MdKeyboardArrowRight size={24} />
                </IconWrapper>
              )}
            </DropdownButton>
            <OptionsList isOpen={isOpen}>
              <Option onClick={() => handleOptionClick("Pix")}>
                <IconWrapper>
                  <SiPix size={24} />
                </IconWrapper>
                Pix
              </Option>
              <Option onClick={() => handleOptionClick("Dinheiro")}>
                <IconWrapper>
                  <AiOutlineDollar size={24} />
                </IconWrapper>
                Dinheiro
              </Option>
              <Option onClick={() => handleOptionClick("Cartão Débito")}>
                <IconWrapper>
                  <AiOutlineCreditCard size={24} />
                </IconWrapper>
                Cartão Débito
              </Option>
              <Option onClick={() => handleOptionClick("Cartão Crédito")}>
                <IconWrapper>
                  <AiOutlineCreditCard size={24} />
                </IconWrapper>
                Cartão Crédito
              </Option>
              <Option onClick={() => handleOptionClick("")}>Selecionar</Option>
            </OptionsList>
          </CustomSelect>
        </Payment>

        <ButtonWrapper>
          <Button title="Salvar" />
          <Empty />
          <Button title="Finalizar" contra />
        </ButtonWrapper>
      </Command>

      <OpenSales>
        <SaleOrder>
          <p>Venda 1</p>
        </SaleOrder>

        <SaleOrder>
          <p>Venda 2</p>
        </SaleOrder>

        <SaleOrder open>
          <p>Venda 3</p>
        </SaleOrder>

        <SaleOrder>
          <p>Venda 4</p>
        </SaleOrder>

        <CiBookmarkPlus size={32} />
      </OpenSales>
    </Container>
  );
};
