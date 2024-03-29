import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";
import { Button } from "../Button";

export const Container = styled.main`
  grid-area: content;

  padding: 1rem 3.2rem 5.2rem;

  width: fit-content;
  margin: 0 auto;
`;

export const InputWrapper = styled.section`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 1rem 3.2rem 5.2rem;

  background-color: ${({ theme }) => theme.LIGHT_400};
  border-radius: 0.8rem;

  height: fit-content;

  margin-top: 5rem;

  > div {
    input {
      background-color: ${({ theme }) => theme.LIGHT_800};
      height: 4.3rem;
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
  gap: 1rem;
  justify-content: space-between;

  > button {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
`;

export const StyledButton = styled(Button)`
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    max-width: 20rem;
  }
`;
