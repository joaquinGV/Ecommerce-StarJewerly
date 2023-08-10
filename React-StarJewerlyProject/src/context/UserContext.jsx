import { createContext, useState } from "react";
import { ingresarConGoogle, login, register } from "../../firebaseConfig";

export const UserContext = createContext();

const UserContextComponent = ({ children }) => {
  const [user, setUser] = useState();

  const loginSession = async (email, password) => {
    try {
      const response = await login({ email, password });
      if (response.success) {
        console.log("Inicio de sesión exitoso");
        console.log(response.user);
        setUser({
          displayName: response.user.displayName,
          email: response.user.email,
          phoneNumber: response.user?.phoneNumber,
          uid: response.user.uid,
          photoURL: response.user?.photoURL,
        });
        // Aquí puedes realizar la redirección a otra página
      } else {
        console.log("Inicio de sesión fallido");
        // Maneja el caso de inicio de sesión fallido
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
      // Maneja el error de inicio de sesión aquí
    }
  };

  const loginGoogle = async () => {
    let res = await ingresarConGoogle();
    console.log(res.user);
    setUser(res.user);
  };

  const logOutSession = () => {
    setUser();
  };

  const userExist = () => {
    const exist = user;
    exist
      ? console.log("Bienvenido", user)
      : console.log("No se encontro ningun usuario");
    return user;
  };

  const registerUser = async (email, password, name, phone) => {
    try {
      const response = await register({ email, password, name, phone });
      if (response.success) {
        console.log("Registro de sesión exitoso");
        loginSession(email, password);
        // Aquí puedes realizar la redirección a otra página
      } else {
        console.log("Registro de sesión fallido");
        // Maneja el caso de Registro de sesión fallido
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
      // Maneja el error de Registro de sesión aquí
    }
  };

  const getUserData = () => {
    // console.log(user);
    console.log(
      "email:",
      user.email,
      "\nNombre:",
      user.displayName,
      "\nphone:",
      user.phoneNumber
    );
    // console.log("UUID:", user.uid);
  };

  let data = {
    user,
    loginSession,
    loginGoogle,
    logOutSession,
    userExist,
    registerUser,
    getUserData,
  };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export default UserContextComponent;
