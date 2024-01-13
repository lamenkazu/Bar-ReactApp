import { useEffect, useState } from "react";
import { useProducts } from "../../hooks/producst";

import { ProductListProps } from "../../@types/products";

import { Container, ProductsWrapper } from "./styles";
import { ProductCard } from "../ProductCard";

interface SectionProps {
  title: string;
}

export const Section = ({ title }: SectionProps) => {
  const [data, setData] = useState<ProductListProps>();

  const { getProductsByCategory } = useProducts();

  useEffect(() => {
    const fetchData = async () => {
      await getProductsByCategory(title).then((response) => {
        setData(response);
      });
    };

    fetchData();
  }, []);

  return (
    <Container>
      <h3> {title} </h3>

      <ProductsWrapper>
        {data?.products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </ProductsWrapper>
    </Container>
  );
};
