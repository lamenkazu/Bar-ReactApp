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

  display: ${(props) => (props.$isOpen ? "block" : "none")};
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
