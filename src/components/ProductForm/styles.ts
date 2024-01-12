import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";
import { Button } from "../Button";

export const Container = styled.div`
  grid-area: content;

  padding: 1rem 3.2rem 5.2rem;

  width: fit-content;
  margin: 0 auto;
`;

export const InputWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 1rem 3.2rem 5.2rem;

  background-color: ${({ theme }) => theme.WHITE};
  border-radius: 0.8rem;

  height: fit-content;

  margin-top: 5rem;

  > div {
    input {
      background-color: ${({ theme }) => theme.BACKGROUND};
    }
  }

  > h1 {
    font-size: 3.2rem;
  }
`;

export const DivisoryOne = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin-top: 5rem;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    flex-direction: row;

    > div:nth-child(2) {
      width: 100%;
    }
  }
`;

export const DivisoryTwo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    flex-direction: row;

    > div:nth-child(2) {
      input {
        height: 100%;
      }
    }
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > label {
    color: ${({ theme }) => theme.BLUE};
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 16px */
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    min-width: 33.2rem;
  }
`;

export const ButtonsWrapper = styled.section`
  display: flex;
  gap: 3.2rem;
  justify-content: space-between;
`;

export const StyledButton = styled(Button)`
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    max-width: 20rem;
  }
`;
