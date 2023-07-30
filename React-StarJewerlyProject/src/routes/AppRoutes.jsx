import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";

import { routes } from "./routes";

const AppRouter = () => {
  return (
    <Routes>
      {/* Rutas publicas */}
      <Route element={<Layout />}>
        {routes.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
      </Route>

      {/* Rutas privadas */}
      <Route element={<ProtectedRoutes/>}>
        <Route></Route>
      </Route>

      <Route path="*" element={<h1>404 not found</h1>} />
    </Routes>
  );
};

export default AppRouter;
