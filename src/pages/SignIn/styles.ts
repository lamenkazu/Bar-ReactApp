import styled from "styled-components";

export const Container = styled.form`
  grid-area: content;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  margin-top: 7.3rem;

  width: fit-content;
  margin-inline: auto;

  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.LIGHT_700};
  text-align: center;
  padding: 6.4rem;
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
