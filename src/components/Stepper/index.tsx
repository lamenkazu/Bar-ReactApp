import { Dispatch, SetStateAction, useState } from "react";

import { Container } from "./styled";
import { BsPlusLg } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";
import { Order } from "../../@types/sales";

interface StepeprProps {
  amount: number;
  onChange: Dispatch<SetStateAction<Order>>;
  position: number;
}

export const Stepper = ({ amount, onChange, position }: StepeprProps) => {
  const addOnStepper = () => {
    onChange((prevState: Order) => {
      const updatedProducts = [...prevState.products];
      updatedProducts[position] = {
        ...updatedProducts[position],
        quantity: ++updatedProducts[position].quantity,
      };

      return {
        ...prevState,
        products: updatedProducts,
        total: prevState.total + updatedProducts[position].price,
      };
    });
  };
  const removeFromStepper = () => {
    onChange((prevState) => {
      const updatedProducts = [...prevState.products];
      updatedProducts[position] = {
        ...updatedProducts[position],
        quantity: updatedProducts[position].quantity - 1,
      };

      if (amount === 1) {
        return {
          ...prevState,
          products: updatedProducts.filter((_, index) => index !== position),
          total: prevState.total - updatedProducts[position].price,
        };
      }

      return {
        ...prevState,
        products: updatedProducts,
        total: prevState.total - updatedProducts[position].price,
      };
    });
  };

  return (
    <Container>
      <FiMinus onClick={removeFromStepper} />
      <p>{amount}</p>
      <BsPlusLg onClick={addOnStepper} />
    </Container>
  );
};
