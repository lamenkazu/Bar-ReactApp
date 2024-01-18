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
  > div {
    border: none;
    height: 50dvh;

    ul {
      text-align: center;
    }
    button {
      height: 3rem;
    }
  }
`;

export const Command = styled.section`
  width: 100%;
`;

export const SearchWrapper = styled.section`
  width: 90%;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;

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

export const FilterWrapper = styled.section`
  display: flex;
  justify-content: space-evenly;
  margin: 1rem 0 3rem;

  > select {
    border: none;
    max-width: 21rem;
    border-radius: 0.5rem;
    font-size: 1.8rem;

    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
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

  > ul {
    display: flex;
    list-style: none;
    flex-wrap: wrap;
    gap: 2rem;

    color: ${({ theme }) => theme.BLUE};

    padding: 1rem;

    li {
      /* background-color: ${({ theme }) => theme.LIGHT_300}; */

      display: flex;
      flex-direction: column;
      font-weight: bold;
      justify-content: space-between;

      box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
        rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
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
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;
