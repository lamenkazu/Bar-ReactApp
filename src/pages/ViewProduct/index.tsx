import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { useProducts } from "../../hooks/producst";

import { Container, ContentDetails, StyledButton, UsersInfo } from "./styles";
import { GoBack } from "../../components/GoBack";

import { PiCaretLeft } from "react-icons/pi";
import { ProductProps } from "../../@types/products";

export const ViewProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [data, setData] = useState<ProductProps>({} as ProductProps);

  const { getProductById } = useProducts();

  const goToEditPage = () => {
    navigate(`/produtos/editar/${data.id}`);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getProductById(id ?? "");
      setData(response);
      //TODO loading
    };

    fetchData();
  }, []);

  return (
    <Container>
      <GoBack onClick={handleGoBack}>
        <PiCaretLeft size={32} />
        <p>voltar</p>
      </GoBack>

      <section>
        <div>
          <ContentDetails>
            <h1>{data.name}</h1>

            <p>{data.category}</p>

            <span> R$ {data.price}</span>

            <UsersInfo>
              <p>Criado por: {data.created_by} </p>
              <p>Atualizado por: {data.updated_by} </p>
            </UsersInfo>
          </ContentDetails>

          <StyledButton title={`Editar Prato`} onClick={goToEditPage} />
        </div>
      </section>
    </Container>
  );
};
