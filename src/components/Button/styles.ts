import styled from "styled-components";

interface ContraProps {
  $contra?: boolean;
}

export const Container = styled.button<ContraProps>`
  width: 100%;
  background-color: ${({ theme, $contra }) =>
    $contra ? theme.TOMATO : theme.ORANGE};

  display: flex;
  justify-content: center;

  > p {
    font-size: 1.4rem;
    font-style: normal;
    font-weight: bold;
    line-height: 24px; /* 171.429% */

    color: ${({ theme, $contra }) => ($contra ? theme.LIGHT_100 : theme.BLACK)};
  }

  height: 5.6rem;
  border: 0;
  padding: 0 1.6rem;
  border-radius: 0.5rem;
  font-weight: 500;

  padding-inline: 3.2rem;

  display: flex;
  align-items: center;
  gap: 0.8rem;

  &:disabled {
    opacity: 0.8;
    background-color: ${({ theme }) => theme.BROWN_DISABLED};

    > p {
      color: ${({ theme }) => theme.BACKGROUND_2};
    }
  }
`;
