import React, { useEffect, useState } from "react";
import { useProducts } from "../../hooks/producst";

import { Container } from "./styles";
import { Section } from "../../components/Section";

export const ListProducts = () => {
  const { getCategories } = useProducts();

  const [categories, setCategories] = useState<string[]>();

  useEffect(() => {
    const fetchCategories = async () => {
      await getCategories().then((response) => {
        setCategories(response);
      });
    };

    fetchCategories();
  }, []);

  return (
    <Container>
      {categories?.map((category, index) => (
        <Section key={index} title={category}></Section>
      ))}
    </Container>
  );
};
