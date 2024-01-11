import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.BLUE};
`;

export const StyledInput = styled.input`
  background-color: ${({ theme }) => theme.BACKGROUND};
  border-radius: 0.8rem;
  border: 0;
  padding: 1.2rem 1.4rem;
`;
