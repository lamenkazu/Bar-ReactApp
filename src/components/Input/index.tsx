import { InputHTMLAttributes } from "react";
import { Container, Label, StyledInput } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  lbl: string;
}

export const Input = ({ id, lbl, ...rest }: InputProps) => {
  return (
    <Container>
      <Label htmlFor={id}>{lbl}</Label>
      <StyledInput id={id} {...rest} />
    </Container>
  );
};
