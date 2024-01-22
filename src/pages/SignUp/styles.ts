import styled from "styled-components";

export const Container = styled.main`
  grid-area: content;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  margin-top: 3.8rem;
  margin-bottom: 3.8rem;

  width: fit-content;
  margin-inline: auto;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.LIGHT_300};
  text-align: center;
  padding: 3.2rem 4.2rem 4.2rem;

  > button {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
`;

export const InputWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  margin-bottom: 1.6rem;

  text-align: left;
`;

export const PersonInfoWrapper = styled.div`
  display: flex;
  gap: 4rem;
`;

export const GenderWrapper = styled.div`
  width: 100%;

  > section {
    display: flex;
    justify-content: space-between;
    gap: 3rem;

    margin-top: 1rem;

    > div {
      display: flex;
      align-items: center;
      gap: 0.8rem;
    }
  }
`;

export const PasswordWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  /* gap: 1rem; */
  width: 100%;

  > div {
    width: 48%;
  }
`;
