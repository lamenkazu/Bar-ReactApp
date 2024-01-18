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
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
`;
