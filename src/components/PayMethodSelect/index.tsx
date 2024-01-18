import { Dispatch, SetStateAction, useState } from "react";
import {
  Container,
  DropdownButton,
  IconWrapper,
  Option,
  OptionsList,
} from "./styles";

import { SiPix } from "react-icons/si";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiOutlineCreditCard, AiOutlineDollar } from "react-icons/ai";

interface PayMethodSelectProps {
  selectedOption: string;
  setSelectedOption: Dispatch<SetStateAction<string>>;
}

export const PayMethodSelect = ({
  selectedOption,
  setSelectedOption,
}: PayMethodSelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <Container>
      <DropdownButton onClick={() => setIsOpen(!isOpen)}>
        {selectedOption === "" && (
          <IconWrapper>
            Pagamento
            <MdKeyboardArrowRight size={24} />
          </IconWrapper>
        )}

        {selectedOption === "pix" && (
          <IconWrapper>
            <SiPix size={24} />
            <MdKeyboardArrowRight size={24} />
          </IconWrapper>
        )}
        {selectedOption === "cash" && (
          <IconWrapper>
            <AiOutlineDollar size={24} />
            <MdKeyboardArrowRight size={24} />
          </IconWrapper>
        )}
        {selectedOption === "debit_card" && (
          <IconWrapper>
            <AiOutlineCreditCard size={24} />
            Débito
            <MdKeyboardArrowRight size={24} />
          </IconWrapper>
        )}
        {selectedOption === "credit_card" && (
          <IconWrapper>
            <AiOutlineCreditCard size={24} />
            Crédito
            <MdKeyboardArrowRight size={24} />
          </IconWrapper>
        )}
      </DropdownButton>
      <OptionsList $isOpen={isOpen}>
        <Option onClick={() => handleOptionClick("pix")}>
          <IconWrapper>
            <SiPix size={24} />
          </IconWrapper>
          Pix
        </Option>
        <Option onClick={() => handleOptionClick("cash")}>
          <IconWrapper>
            <AiOutlineDollar size={24} />
          </IconWrapper>
          Dinheiro
        </Option>
        <Option onClick={() => handleOptionClick("debit_card")}>
          <IconWrapper>
            <AiOutlineCreditCard size={24} />
          </IconWrapper>
          Cartão Débito
        </Option>
        <Option onClick={() => handleOptionClick("credit_card")}>
          <IconWrapper>
            <AiOutlineCreditCard size={24} />
          </IconWrapper>
          Cartão Crédito
        </Option>
        <Option onClick={() => handleOptionClick("")}>Selecionar</Option>
      </OptionsList>
    </Container>
  );
};
