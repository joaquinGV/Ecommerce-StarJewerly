import { useContext, useState } from "react";
import { UserContext } from "../../../context/UserContext";
import "./CheckLoginContainer.css";
import Login from "../login/login";
import Register from "../register/Register";

const CheckLoginContainer = () => {
  const { user } = useContext(UserContext);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);

  const toggleLoginPopup = () => {
    setShowLoginPopup(!showLoginPopup);
  };
  const toggleRegisterPopup = () => {
    setShowRegisterPopup(!showRegisterPopup);
  };

  return (
    <div className="CheckLoginContainer-container">
      <p className="CheckLoginContainer-title">
        ¡Hola! Para realizar tu compra debes iniciar sesión o crear una cuenta.
      </p>
      {!user && (
        <div className="buttons-container">
          <button onClick={toggleRegisterPopup} className="button linked">
            Crear cuenta
          </button>
          {showRegisterPopup && <Register onClose={toggleRegisterPopup} login={toggleLoginPopup} />}
          <button onClick={toggleLoginPopup} className="button linked">
            Iniciar Sesión
          </button>
          {showLoginPopup && <Login onClose={toggleLoginPopup} />}
        </div>
      )}
    </div>
  );
};

export default CheckLoginContainer;
