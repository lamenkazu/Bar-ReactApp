import { Container } from "./styles";

export function StyledLink({ title, ...rest }) {
  return <Container {...rest}>{title}</Container>;
}
