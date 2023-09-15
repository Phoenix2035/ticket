import { Navigate, Outlet } from "react-router-dom";

import {TOKEN} from "constants/token.const";
import ROUTES_CONSTANT from "constants/routes.const";

const OnboardingRoutesGuard = () => {
  const isAuth = localStorage.getItem(TOKEN);

  return (
    <>
      {isAuth  ? (
        <Navigate to={ROUTES_CONSTANT.DASHBOARD_ROUTE} replace />
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default OnboardingRoutesGuard;
