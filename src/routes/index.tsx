import { useAuth } from "../hooks/auth";

import { BrowserRouter } from "react-router-dom";
import { AuthRoutes } from "./auth.routes";
import { CommonRoutes } from "./common.routes";
import { AdminRoutes } from "./admin.routes";

import { USER_ROLE } from "./../utils/roles";
import { UserProps } from "../@types/auth";

export const Routes = () => {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      {user.id !== "" ? <AccessRoute user={user} /> : <AuthRoutes />}
    </BrowserRouter>
  );
};

interface AccessRouteProps {
  user: UserProps;
}

const AccessRoute = ({ user }: AccessRouteProps) => {
  if (user) {
    switch (user.role) {
      case USER_ROLE.ADMIN:
        return <AdminRoutes />;

      case USER_ROLE.COMMON:
        return <CommonRoutes />;

      default:
        return <CommonRoutes />;
    }
  }
};
