import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  max-width: min(100%, ${DEVICE_BREAKPOINTS.MD});
  height: 100dvh;

  display: grid;
  grid-template-rows: 9.4rem 1fr max-content;
  grid-template-columns: 100vw;

  grid-template-areas:
    "header"
    "content"
    "footer";

  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
`;
