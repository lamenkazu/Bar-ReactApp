import { BrowserRouter } from "react-router-dom";
import { AuthRoutes } from "./auth.routes";

export const Routes = () => {
  return (
    <BrowserRouter>
      <AuthRoutes />
    </BrowserRouter>
  );
};
