import { Outlet } from "react-router-dom";

import { Container } from "./styles";
// import { Header } from "../../components/Header";
// import { Footer } from "../../components/Footer";

export const AppLayout = () => {
  return (
    <Container>
      {/* <Header /> */}
      <Outlet />
      {/* <Footer /> */}
    </Container>
  );
};
