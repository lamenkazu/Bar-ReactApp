import styled from "styled-components";

export const Container = styled.section`
  padding-inline: 2.4rem;
  display: flex;
  flex-direction: column;

  margin-bottom: 1rem;

  > h3 {
    align-self: start;

    font-family: Poppins;
    font-size: 2rem;
    line-height: 140%; /* 25.2px */

    color: ${({ theme }) => theme.BLUE};

    margin: 2rem 0;
  }
`;

export const ProductsWrapper = styled.div`
  max-width: 100vw;
  overflow-x: scroll;
  display: flex;
  gap: 2.6rem;
`;
