import React, { HTMLProps, PropsWithChildren } from "react";
import { Container } from "./styles";

interface GoBackProps extends HTMLProps<HTMLDivElement> {}

export const GoBack = ({
  children,
  ...rest
}: PropsWithChildren<GoBackProps>) => {
  return <Container {...rest}>{children}</Container>;
};
