import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../hooks/producst";

import { Container, ButtonWrapper } from "./styles";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";

import { FaPlus } from "react-icons/fa";
import { USER_ROLE } from "../../utils/roles";
import { useAuth } from "../../hooks/auth";

export const ListProducts = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { getCategories } = useProducts();

  const [categories, setCategories] = useState<string[]>();

  const goToNewProductPage = () => {
    navigate("/produtos/novo");
  };

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
      {[USER_ROLE.ADMIN].includes(user.role) && (
        <ButtonWrapper>
          <Button
            title="Novo Produto"
            icon={FaPlus}
            onClick={goToNewProductPage}
          />
        </ButtonWrapper>
      )}

      {categories?.map((category, index) => (
        <Section key={index} title={category}></Section>
      ))}
    </Container>
  );
};
