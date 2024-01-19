import styled from "styled-components";

export const Container = styled.form`
  grid-area: content;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  margin-top: 7.3rem;

  width: fit-content;
  margin-inline: auto;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.LIGHT_300};
  text-align: center;
  padding: 6.4rem;

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
  width: 28.8rem;

  margin-inline: auto;
`;
