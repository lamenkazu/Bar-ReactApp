import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.BLUE};
  font-family: "Roboto", sans-serif;
`;

export const StyledInput = styled.input`
  background-color: ${({ theme }) => theme.BACKGROUND};
  border-radius: 0.8rem;
  border: 0;
  padding: 1.2rem 1.4rem;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;
