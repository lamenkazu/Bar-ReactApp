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
  display: flex;
  align-items: center;

  > p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    width: 100%;
  }

  > svg {
    color: ${({ theme }) => theme.TOMATO};
    transition: all 300ms ease-in-out;

    &:hover {
      scale: 1.4;
    }
  }

  width: 15rem;
  height: 100%;
  padding-inline: 0.5rem;
  padding-top: 0.3rem;
  border-radius: ${({ open }) => (open ? ".5rem" : "0.5rem")};

  text-align: center;

  /* border: ${({ open }) => (open ? "1px dashed black" : "")}; */

  cursor: pointer;

  box-shadow: ${({ open }) =>
    open
      ? "none"
      : "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"};

  background-color: ${({ theme, open }) => (open ? "none" : theme.LIGHT_700)};

  font-weight: bold;
  color: ${({ theme }) => theme.DARK_100};
`;
