import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ProductSection = styled.section`
  display: flex;
  flex-direction: column;
  min-width: 60dvw;
  max-width: 60dvw;

  > div {
    border: none;
    height: 50dvh;

    ul {
      text-align: center;

      li {
        padding: 0.6rem;

        min-width: 16.4rem;
        max-width: 16.4rem;

        span {
          color: ${({ theme }) => theme.TOMATO};
          font-size: 1.4rem;
        }
      }
    }
    button {
      height: 3rem;
    }
  }

  > p {
    font-weight: bold;
    font-size: 2rem;
    margin-left: 0.5rem;
    margin-top: -1rem;
  }
`;

export const Command = styled.section`
  width: 100%;
`;

export const SearchWrapper = styled.section`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  width: 90%;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;

  width: 100%;
  height: fit-content;

  margin-top: -2rem;
  padding: 1.2rem 1.4rem;

  border-radius: 5px;
  background-color: ${({ theme }) => theme.LIGHT_300};

  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  > svg {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.DARK_100};
  }

  > input {
    width: 100%;
    border: 0;
    margin-right: 2.8rem;
    background: none;
  }
`;

export const FilterWrapper = styled.div`
  margin: 1rem 0 3rem;

  > select {
    border: none;
    max-width: 21rem;
    border-radius: 0.5rem;
    font-size: 1.8rem;

    padding: 1rem 1.4rem;

    height: 100%;

    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > label {
    font-size: 1.8rem;
  }
`;

export const Title = styled.section`
  width: 90%;
  display: flex;
  gap: 1.4rem;
  justify-content: space-between;
  align-items: center;

  > h1 {
    width: 28%;
  }

  > input {
    width: 100%;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

    outline: none;
    border: none;
    border-radius: 0.8rem;
    padding: 0.5rem 1rem;
  }
`;

export const ProductsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.4rem;
  text-align: center;
  flex-wrap: wrap;
`;

export const Products = styled.div`
  border-radius: 0.8rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 10px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 10px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  width: 90%;

  height: 31dvh;
  overflow-y: scroll;
  background-color: ${({ theme }) => theme.LIGHT_300};
  padding: 0.08rem;

  > ul {
    display: flex;
    list-style: none;
    flex-wrap: wrap;
    gap: 2rem;

    color: ${({ theme }) => theme.BLUE};

    padding: 1rem;

    li {
      display: flex;
      flex-direction: column;
      font-weight: bold;
      justify-content: space-between;

      min-width: 19rem;
      max-width: 19rem;

      box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
        rgba(6, 24, 44, 0.65) 0px 2px 6px -1px,
        rgba(255, 255, 255, 0.08) 0px 1px 0px inset;

      padding: 0.3rem;
      border-radius: 0.8rem;

      font-size: 1.8rem;

      > div {
        justify-content: center;
        font-weight: normal;
      }
    }
  }
`;

export const Payment = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -5rem;
`;

export const TotalPrice = styled.p`
  text-align: center;
  font-size: 4rem;
  padding: 3rem 0;
  font-weight: bold;
`;

export const ButtonWrapper = styled.section`
  display: flex;

  margin-bottom: 4rem;

  > button {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
`;
