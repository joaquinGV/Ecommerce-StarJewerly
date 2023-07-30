import { Navigate } from "react-router";
import Layout from "../components/layout/Layout";

const ProtectedRoutes = () => {
  let userRol = "admin";

  return (
    <div>
      {userRol !== "admin" ? (
        <Navigate to={"/Ecommerce-StarJewerly/"} />
      ) : (
        <Layout />
      )}
    </div>
  );
};

export default ProtectedRoutes;

{
  /* <Navigate to={"/Ecommerce-StarJewerly/"} /> */
}
