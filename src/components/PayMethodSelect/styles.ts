import styled from "styled-components";

interface PaymentSelectProps {
  $isOpen?: boolean;
}

export const Container = styled.div<PaymentSelectProps>`
  position: relative;
  display: inline-block;
  margin: 1rem;
  user-select: none;

  background-color: ${({ $isOpen }) => ($isOpen ? "transparent" : "#f2f2f2")};

  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  border-radius: 0.8rem 0 0.8rem 0.8rem;
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

  display: ${(props) => (props.$isOpen ? "block" : "none")};

  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  border-radius: 0 0.8rem 0.8rem 0.8rem;
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
