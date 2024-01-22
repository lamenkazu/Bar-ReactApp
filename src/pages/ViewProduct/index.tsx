import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { useProducts } from "../../hooks/producst";

import { Container, ContentDetails, StyledButton, UsersInfo } from "./styles";
import { GoBack } from "../../components/GoBack";

import { PiCaretLeft } from "react-icons/pi";
import { ProductProps } from "../../@types/products";
import { USER_ROLE } from "../../utils/roles";
import { formatter } from "../../utils/moneyFormatter";

export const ViewProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { user } = useAuth();

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

            <span>{formatter.format(Number(data.price))}</span>

            <UsersInfo>
              <p>
                <strong>Criado por: </strong>
                {data.created_by}
              </p>
              <p>
                <strong>Atualizado por: </strong>
                {data.updated_by}
              </p>
            </UsersInfo>
          </ContentDetails>

          {[USER_ROLE.ADMIN].includes(user.role) && (
            <StyledButton title={`Editar Produto`} onClick={goToEditPage} />
          )}
        </div>
      </section>
    </Container>
  );
};
