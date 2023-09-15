import { Outlet, Navigate } from "react-router-dom";

import {TOKEN} from "constants/token.const";
import ROUTES_CONSTANT from "constants/routes.const";

const PrivateRoutes = () => {
  const isAuth = localStorage.getItem(TOKEN);

  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to={ROUTES_CONSTANT.LOGIN_ROUTE} replace />
  );
};

export default PrivateRoutes;
