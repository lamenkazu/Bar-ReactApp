import styled from "styled-components";

interface OpenProps {
  open?: boolean;
}

interface PaymentSelectProps {
  isOpen?: boolean;
}

export const Container = styled.main`
  display: flex;
  justify-content: space-between;
  padding: 3rem;
`;

export const ProductSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-inline: auto;

  > div {
    border: 1px solid black;
    height: 50dvh;
    button {
      height: 3rem;
    }
  }
`;

export const Command = styled.section`
  width: 100%;
`;

export const SearchWrapper = styled.section`
  width: 70%;
  align-self: center;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;

  padding: 1.2rem 1.4rem;

  border-radius: 5px;
  background-color: ${({ theme }) => theme.DARK_800};

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  > svg {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.DARK_100};
  }

  > input {
    width: 100%;
    border: 0;
    margin-right: 2.8rem;
    background: none;
  }
`;

export const FilterWrapper = styled.section`
  display: flex;
  justify-content: space-evenly;
  margin: 1rem 0 3rem;

  > select {
    border: none;
    max-width: 21rem;
    border-radius: 0.5rem;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ProductsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.4rem;
  text-align: center;
  flex-wrap: wrap;
`;

export const ProductList = styled.div`
  border: 1px solid ${({ theme }) => theme.DARK_700};
  border-radius: 0.8rem;

  width: 70%;
  height: 50dvh;
  overflow-y: scroll;
  margin-inline: auto;
`;

export const Products = styled.div`
  border: 1px dashed ${({ theme }) => theme.DARK_700};
  border-radius: 0.8rem;

  width: 70%;
  height: 31dvh;
  overflow-y: scroll;
  margin-inline: auto;
  padding: 0.5rem;

  > ul {
    display: flex;
    list-style: none;
    flex-wrap: wrap;
    gap: 2rem;

    color: ${({ theme }) => theme.BLUE};

    li {
      /* background-color: ${({ theme }) => theme.LIGHT_300}; */

      display: flex;
      flex-direction: column;
      font-weight: bold;

      > div {
        justify-content: center;
        font-weight: normal;
      }
    }
  }
`;

export const CustomSelect = styled.div<PaymentSelectProps>`
  position: relative;
  display: inline-block;
  margin: 1rem;
  user-select: none;

  background-color: ${({ isOpen }) => (isOpen ? "transparent" : "#f2f2f2")};

  border-radius: 0.8rem;
`;

export const DropdownButton = styled.div`
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;

  padding: 1rem;
`;

export const OptionsList = styled.ul<PaymentSelectProps>`
  position: absolute;
  top: 0%;
  left: 100%;
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;

  z-index: 1;

  background-color: #f2f2f2;
  width: max-content;

  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

export const Option = styled.li`
  padding: 8px;
  cursor: pointer;

  display: flex;

  &:hover {
    background-color: ${({ theme }) => theme.DARK_700};
  }
`;

export const IconWrapper = styled.span`
  margin-right: 8px;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const Payment = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TotalPrice = styled.p`
  text-align: center;
  font-size: 4rem;
  padding: 3rem 0;
  font-weight: bold;
`;

export const ButtonWrapper = styled.section`
  display: flex;

  margin-bottom: 4rem;

  padding-inline: 12rem;

  > button {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

export const OpenSales = styled.section`
  height: 3rem;
  border-radius: 0.5rem;

  position: fixed;
  left: 0rem;
  right: 0rem;
  bottom: 0.1rem;

  display: flex;
  gap: 0.5rem;

  > svg {
    cursor: pointer;
  }
`;

export const SaleOrder = styled.div<OpenProps>`
  width: 15rem;
  height: 100%;
  padding-inline: 0.5rem;
  padding-top: 0.3rem;
  border-radius: ${({ open }) => (open ? ".5rem" : "0.5rem")};

  text-align: center;

  /* border: ${({ open }) => (open ? "1px dashed black" : "")}; */

  cursor: pointer;

  background-color: ${({ theme, open }) =>
    open ? theme.LIGHT_1000 : theme.LIGHT_700};

  font-weight: bold;
  color: ${({ theme }) => theme.DARK_100};
`;
