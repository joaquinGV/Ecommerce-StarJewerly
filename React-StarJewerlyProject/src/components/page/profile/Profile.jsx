import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user, userExist, loginGoogle, logOutSession, getUserData } =
    useContext(UserContext);

  return (
    <div>
      <h1>Perfil</h1>
      {user ? (
        <>
          <p>Bienvenido, {user.displayName || "Usuario"}</p>
          <Button onClick={getUserData}>Ver mis datos</Button>
          <Button onClick={logOutSession}>Cerrar sesión</Button>
        </>
      ) : (
        <>
          <p>No has iniciado sesión</p>
          <Button onClick={loginGoogle}>Iniciar sesión con Google</Button>
          <Button onClick={userExist}>Verificar usuario</Button>
          <Link to={"/Ecommerce-StarJewerly/registrarse"}>
            <Button onClick={userExist}>Registrarse</Button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Profile;
