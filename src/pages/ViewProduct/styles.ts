import styled from "styled-components";
import { Button } from "../../components/Button";

export const Container = styled.main`
  grid-area: content;
  padding: 1.6rem 5.6rem 3.2rem;

  text-align: center;

  margin-inline: 6.4rem;

  > section {
    margin-top: 5rem;

    margin-inline: 25rem;

    background-color: ${({ theme }) => theme.BACKGROUND_2};
    border-radius: 0.8rem;

    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;

      padding: 1.6rem 5.6rem 3.2rem;
    }
  }
`;

export const ContentDetails = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin-bottom: 4.8rem;

  > h1 {
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 37.858px */

    font-size: 4rem;

    color: ${({ theme }) => theme.BLACK};
  }

  > p {
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 22.715px */

    font-size: 1.8rem;

    color: ${({ theme }) => theme.TOMATO};
    font-weight: bold;
  }

  > span {
    color: ${({ theme }) => theme.BROWN};
    font-size: 4rem;
  }
`;

export const StyledButton = styled(Button)`
  display: flex;
  align-self: center;
  margin-top: 0;
  height: 3.8rem;
  padding: 1.2rem 2.4rem;

  max-width: 21rem;
  padding: 2.4rem;

  > svg {
    font-size: 3.2rem;
  }
  > p {
    text-align: center;

    font-size: 1.4rem;
    font-style: normal;
    line-height: 24px; /* 171.429% */
  }
`;

export const UsersInfo = styled.section`
  display: flex;
  justify-content: space-between;
`;
