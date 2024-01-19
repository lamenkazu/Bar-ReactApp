import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "./../../styles/deviceBreakpoints";
import { Link } from "react-router-dom";
import { Button } from "../Button";

export const Container = styled.header`
  grid-area: header;
  background-color: ${({ theme }) => theme.LIGHT_300};

  box-shadow: rgba(50, 50, 93, 0.25) 0px 5px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 5px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  border-end-end-radius: 2rem;
  border-bottom-left-radius: 2rem;

  padding: 6.4rem 2.8rem 3.2rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 3.2rem;

  > a {
    img {
      height: 2.4rem;
      width: 100%;
      padding-top: 3rem;
    }
  }

  align-items: end;
  padding-inline: 12.3rem;
`;

export const Empty = styled.div``;

export const StyledButton = styled(Button)`
  display: flex;

  margin-top: -1.4rem;

  height: max-content;
  max-width: 20.2rem;
  padding: 0.35rem 3.2rem;
  > p {
    width: max-content;
  }

  > svg {
    font-size: 3.2rem;
  }
`;

export const Btn = styled.button`
  display: flex;
  border: none;
  background-color: ${({ theme }) => theme.TOMATO};
  border-radius: 0.8rem;

  margin-top: 3.4rem;

  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 20.2rem;
  height: 4rem;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: flex-end;
  > p {
    color: ${({ theme }) => theme.LIGHT_BLUE};
    font-size: 1.2rem;
    line-height: 160%; /* 19.2px */
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    flex-direction: column;
    gap: 0;

    > img {
      width: 19.7rem;
      min-height: 3rem;
    }
  }
`;

export const Menu = styled.button`
  border: 0;
  background: none;

  > svg {
    font-size: 2.5rem;
  }
`;

export const Recipe = styled.button`
  border: 0;
  background: none;
  > svg {
    font-size: 2.5rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: none;
  }
`;

export const Count = styled.div`
  width: 12px;
  height: 12px;

  background-color: rgba(219, 0, 0, 0.79);
  border-radius: 50%;
  position: relative;
  top: -3.2rem;
  right: -1.2rem;

  > p {
    font-size: 0.81rem;
    font-weight: 500;
  }
`;

export const SideBar = styled.div`
  position: fixed;
  height: calc(5vh - 7.7rem);
  top: 0;
  left: 0;
  padding: 6.4rem 2.8rem 3.2rem;
  z-index: 1;
  width: 27%;
  background-color: ${({ theme }) => theme.LIGHT_1000};
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  height: 100%;

  > h3 {
    font-size: 3rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  > svg {
    font-size: 3.4rem;
    cursor: pointer;
  }
`;
export const Content = styled.div`
  background-color: ${({ theme }) => theme.LIGHT_300};
  height: 100%;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 9.6rem;
  width: 27%;
`;

export const SideBarItem = styled.div`
  margin-top: 3.6rem;
  margin-inline: 2.8rem;
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.DARK_700};

  font-size: 1.8rem;

  cursor: pointer;
`;

export const SignOut = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  > svg {
    font-size: 2.4rem;
    cursor: pointer;
  }
`;

export const TextButton = styled.button`
  display: none;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: block;
    border: none;
    background: none;
    white-space: nowrap;
    padding: 1rem 0;

    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 16px */
  }
`;
