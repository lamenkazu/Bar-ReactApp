import { Container } from "./styles";

export const Select = ({ ...rest }) => {
  return (
    <Container {...rest}>
      <option value="">Selecionar</option>
      <option value="Bebida">Dose</option>
      <option value="Refeição">Cerveja</option>
      <option value="Bebida">Cigarro</option>
      <option value="Prato Principal">Refrigerante</option>
      <option value="Sobremesa">Café</option>
      <option value="Bebida">Aperitivo</option>
      <option value="Bebida">Doce</option>
      <option value="Bebida">Uso</option>
    </Container>
  );
};
