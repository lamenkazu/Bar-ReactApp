import { Container } from "./styles";
import { drinkOptions, SelectOption } from "../../utils/categoryOptions";

export const Select = ({ ...rest }) => {
  return (
    <Container {...rest}>
      {drinkOptions.map((option: SelectOption) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Container>
  );
};
