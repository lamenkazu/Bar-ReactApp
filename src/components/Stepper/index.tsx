import { useState } from "react";

import { Container } from "./styled";
import { BsPlusLg } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";

export const Stepper = () => {
  const [stepper, setStepper] = useState(1);

  const addOnStepper = () => {
    setStepper(stepper + 1);
  };
  const removeFromStepper = () => {
    if (stepper === 0) return;
    setStepper(stepper - 1);
  };

  return (
    <Container>
      <FiMinus onClick={removeFromStepper} />
      <p>{stepper}</p>
      <BsPlusLg onClick={addOnStepper} />
    </Container>
  );
};
