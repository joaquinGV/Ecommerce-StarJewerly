import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./checkLoginContainer.css";

const CheckLoginContainer = () => {
  const { user, userExist } = useContext(UserContext);
  const navigate = useNavigate();
  if (user) {
    navigate("/Ecommerce-StarJewerly/login");
  }

  return (
    <div className="CheckLoginContainer-container">
      <p>
        ¡Hola! Para realizar tu compra debes iniciar sesión o crear una cuenta.
      </p>
      <Button onClick={userExist} className="existing-user-button">
        ¿Usuario existente?
      </Button>
      {!user && (
        <div className="links-container">
          <Link
            to="/Ecommerce-StarJewerly/register"
            className="linked register"
          >
            Crear cuenta
          </Link>
          <Link to="/Ecommerce-StarJewerly/login" className="linked">
            Iniciar Sesión
          </Link>
        </div>
      )}
    </div>
  );
};

export default CheckLoginContainer;
