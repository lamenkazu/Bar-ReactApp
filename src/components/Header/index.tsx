import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import {
  Container,
  Menu,
  SideBar,
  Title,
  Content,
  SideBarItem,
  SignOut,
  StyledLink,
} from "./styles";

import { IoMenu } from "react-icons/io5";
// import { PiReceiptLight, PiMagnifyingGlassThin } from "react-icons/pi";
import { GoSignOut } from "react-icons/go";
import { USER_ROLE } from "./../../utils/roles";

export const Header = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const [sideBar, setSideBar] = useState(false);

  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleSideBar = () => setSideBar(!sideBar);

  const handleSignOut = () => {
    if (confirm("Quer mesmo sair?")) {
      signOut();
      navigate("/");
    }
  };

  const handleSales = () => {
    navigate("/vendas");
    setSideBar(false);
  };

  const handleProductsPage = () => {
    navigate("/produtos");
    setSideBar(false);
  };

  const handleRelatory = () => {
    navigate("/relatorios");
    setSideBar(false);
  };

  const handleStock = () => {
    navigate("/estoque");
    setSideBar(false);
  };

  const handleSignUp = () => {
    navigate("/cadastrar");
    setSideBar(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setSideBar(false);
      }
    };
    document.addEventListener("mouseup", handleOutsideClick);

    return () => {
      document.removeEventListener("mouseup", handleOutsideClick);
    };
  }, [sidebarRef]);

  return (
    <Container>
      {sideBar && (
        <SideBar ref={sidebarRef} onClick={handleSideBar}>
          <Title>
            <h3>Menu</h3>
          </Title>

          <Content>
            {[USER_ROLE.COMMON, USER_ROLE.ADMIN].includes(user.role) && (
              <>
                <SideBarItem onClick={handleProductsPage}>Produtos</SideBarItem>
                <SideBarItem onClick={handleRelatory}>Relatorios</SideBarItem>
              </>
            )}
            {[USER_ROLE.ADMIN].includes(user.role) && (
              <>
                <SideBarItem onClick={handleStock}>Estoque</SideBarItem>
                <SideBarItem onClick={handleSales}>Vendas</SideBarItem>
                <SideBarItem onClick={handleSignUp}>
                  Cadastrar Funcionario
                </SideBarItem>
              </>
            )}
          </Content>
        </SideBar>
      )}

      <Menu>
        <IoMenu size={32} onClick={handleSideBar} />
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
