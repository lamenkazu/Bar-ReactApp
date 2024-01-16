import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;

  width: 100%;

  > p {
    color: ${({ theme }) => theme.DARK_100};

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      font-size: 2rem;
    }
  }

  > svg {
    color: ${({ theme }) => theme.DARK_300};
    cursor: pointer;

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      font-size: 2.4rem;
    }
  }
`;
