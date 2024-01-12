import { Container } from "./styles";

export const Select = ({ ...rest }) => {
  return (
    <Container {...rest}>
      <option value="">Selecionar</option>
      <option value="Dose">Dose</option>
      <option value="Cerveja">Cerveja</option>
      <option value="Cigarro">Cigarro</option>
      <option value="Refrigerante">Refrigerante</option>
      <option value="Café">Café</option>
      <option value="Aperitivo">Aperitivo</option>
      <option value="Doce">Doce</option>
      <option value="Uso">Uso</option>
    </Container>
  );
};
