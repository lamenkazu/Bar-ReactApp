import styled from "styled-components";

export const Container = styled.div`
  padding-top: 10rem;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  color: ${({ theme }) => theme.BLUE};

  > a {
    color: ${({ theme }) => theme.ORANGE};
    margin-top: 2.4rem;
  }
`;
