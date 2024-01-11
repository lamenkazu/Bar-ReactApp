import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import {
  Container,
  Recipe,
  Count,
  Menu,
  SideBar,
  Title,
  Content,
  SideBarItem,
  SignOut,
  StyledButton,
  Btn,
  StyledLink,
  Empty,
  TextButton,
} from "./styles";

import { IoMenu, IoCloseOutline } from "react-icons/io5";
import { PiReceiptLight, PiMagnifyingGlassThin } from "react-icons/pi";
import { GoSignOut } from "react-icons/go";
import { USER_ROLE } from "./../../utils/roles";

export const Header = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const [sideBar, setSideBar] = useState(false);

  const handleSideBar = () => setSideBar(!sideBar);

  const handleSignOut = () => {
    if (confirm("Quer mesmo sair?")) {
      signOut();
      navigate("/");
    }
  };

  const handleNewDish = () => {
    navigate("/new");
    setSideBar(false);
  };

  const handleFavoriteList = () => {
    navigate("/favorites");
    setSideBar(false);
  };

  return (
    <Container>
      {sideBar && (
        <SideBar>
          <Title>
            <IoCloseOutline onClick={handleSideBar} />
            <h3>Menu</h3>
          </Title>

          <Content>
            {[USER_ROLE.COMMON, USER_ROLE.ADMIN].includes(user.role) && (
              <>
                <SideBarItem onClick={handleFavoriteList}>Produtos</SideBarItem>
                <SideBarItem onClick={handleFavoriteList}>
                  Relatorios
                </SideBarItem>
              </>
            )}
            {[USER_ROLE.ADMIN].includes(user.role) && (
              <>
                <SideBarItem onClick={handleNewDish}>Estoque</SideBarItem>
                <SideBarItem onClick={handleNewDish}>Vendas</SideBarItem>
              </>
            )}
          </Content>
        </SideBar>
      )}

      <Menu>
        <IoMenu onClick={handleSideBar} />
      </Menu>

      <StyledLink to="/">
        <img src="" alt="Logo Aperitivos Valadares" />
        {[USER_ROLE.ADMIN].includes(user.role) && <p>admin</p>}
      </StyledLink>

      <SignOut>
        <p>Bem vindo, {user.name}!</p>
        <GoSignOut onClick={handleSignOut} />
      </SignOut>
    </Container>
  );
};
