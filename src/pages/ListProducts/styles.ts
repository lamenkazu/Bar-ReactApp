import styled from "styled-components";

export const Container = styled.main`
  grid-area: content;

  align-items: center;
  padding-inline: 12.8rem;
  padding-top: 3rem;
`;

export const ButtonWrapper = styled.section`
  display: flex;
  justify-content: end;

  > button {
    width: 20%;
  }
`;
