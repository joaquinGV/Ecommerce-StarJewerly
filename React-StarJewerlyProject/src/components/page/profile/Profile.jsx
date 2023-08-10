import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { Button } from "@mui/material";
import CheckLoginContainer from "../checkLogin/CheckLoginContainer";
import "./Profile.css";

const Profile = () => {
  const { user, logOutSession, getUserData } = useContext(UserContext);

  return (
    <div className="profile">
      <h1>Perfil</h1>
      {user ? (
        <>
          <p>Bienvenido, {user.displayName || "Usuario"}</p>
          <Button onClick={getUserData}>Validar mi perfil</Button>
          <Button onClick={logOutSession}>Cerrar sesión</Button>
        </>
      ) : (
        <>
          <p>No has iniciado sesión</p>

          <CheckLoginContainer />
        </>
      )}
    </div>
  );
};

export default Profile;
