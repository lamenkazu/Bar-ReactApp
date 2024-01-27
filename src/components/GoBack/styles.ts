import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  position: absolute;
  left: 0;
  padding-left: 11.4rem;

  &:hover {
    color: ${({ theme }) => theme.DARK_500};
  }

  > p {
    font-style: normal;
    font-weight: bold;
    line-height: 140%; /* 33.6px */

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      font-size: 2.4rem;
    }
  }

  > svg {
    font-size: 2.2rem;

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      font-size: 3.2rem;
    }
  }
`;
