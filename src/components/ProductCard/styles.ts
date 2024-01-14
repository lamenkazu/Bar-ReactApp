import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 19rem;
  align-items: center;

  border-radius: 0.8rem;

  padding: 1rem 3rem 1rem;

  background-color: ${({ theme }) => theme.LIGHT_300};

  justify-content: space-between;

  min-width: 25rem;
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
`;

export const H2 = styled.h2`
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 24px; /* 171.429% */
  color: ${({ theme }) => theme.DARK_300};

  font-size: 2.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 33.6px */
`;

export const P = styled.h2`
  display: block;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: bold;
  line-height: 160%; /* 22.4px */
  color: ${({ theme }) => theme.DARK_500};
`;

export const Span = styled.span`
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  color: ${({ theme }) => theme.BRIGHT_BROWN};

  font-size: 3rem;
  line-height: 160%;
`;
