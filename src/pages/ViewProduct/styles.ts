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

    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

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
    font-weight: bold;
    line-height: 140%; /* 37.858px */

    font-size: 4rem;

    color: ${({ theme }) => theme.BLUE};
  }

  > p {
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 22.715px */

    font-size: 1.8rem;

    color: ${({ theme }) => theme.DARK_400};
    font-weight: 500;
  }

  > span {
    color: ${({ theme }) => theme.TOMATO};
    font-size: 4rem;
    font-weight: bold;
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
