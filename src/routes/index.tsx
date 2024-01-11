import { BrowserRouter } from "react-router-dom";
import { AuthRoutes } from "./auth.routes";
import { CommonRoutes } from "./common.routes";

export const Routes = () => {
  return (
    <BrowserRouter>
      <AuthRoutes />
      {/* <CommonRoutes /> */}
    </BrowserRouter>
  );
};
