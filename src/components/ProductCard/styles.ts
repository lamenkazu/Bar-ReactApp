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

  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 10px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 10px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  justify-content: space-between;

  min-width: 32.4rem;
  max-width: 32.4rem;
  text-align: center;
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 100%;
  place-content: center;
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
  font-weight: bold;
  line-height: 100%;
  color: ${({ theme }) => theme.TOMATO};

  font-size: 3rem;
  line-height: 160%;
`;
