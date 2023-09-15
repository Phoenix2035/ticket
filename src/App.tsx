import { Routes, Route } from "react-router-dom";

import LoginPage from "pages/public/login.page";
import NotFoundPage from "pages/not-found.page";
import PrivateRoutes from "routes/private-routes";
import ROUTES_CONSTANT from "./constants/routes.const";
import DashboardPage from "./pages/private/dashboard.page";
import OnboardingRoutesGuard from "routes/onboarding-routes-guard";


function App() {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path={ROUTES_CONSTANT.DASHBOARD_ROUTE} element={<DashboardPage />} />

      </Route>

      <Route element={<OnboardingRoutesGuard />}>
        <Route path={ROUTES_CONSTANT.LOGIN_ROUTE} element={<LoginPage />} />
      </Route>
      <Route path={ROUTES_CONSTANT.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
