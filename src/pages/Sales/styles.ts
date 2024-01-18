import styled from "styled-components";

interface OpenProps {
  open?: boolean;
}

export const Container = styled.main`
  display: flex;
  justify-content: space-between;
  padding: 3rem;
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

export const OrderHead = styled.div<OpenProps>`
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
