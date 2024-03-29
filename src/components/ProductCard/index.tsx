import React from "react";
import { Container, StyledLink, H2, P, Span } from "./styles";
import { ProductProps } from "../../@types/products";
import { formatter } from "../../utils/moneyFormatter";

interface ProductCardProps {
  data: ProductProps;
}

export const ProductCard = ({ data }: ProductCardProps) => {
  return (
    <Container>
      <StyledLink to={`/produtos/visualizar/${data.id}`}>
        <H2> {data.name} </H2>
        <P> {data.category} </P>
        <Span>{formatter.format(Number(data.price))} </Span>
      </StyledLink>
    </Container>
  );
};
