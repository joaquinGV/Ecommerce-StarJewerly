import { createContext, useState } from "react";
import { ingresarConGoogle, login, register } from "../../firebaseConfig";

export const UserContext = createContext();

const UserContextComponent = ({ children }) => {
  const [user, setUser] = useState();

  const loginSession = (email, password) => {
    setUser(login(email, password));
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

  const registerUser = () => {
    let res = register();
    console.log("Registro exitoso:", res);
  };

  const getUserData = () => {
    // console.log(user);
    console.log("email:", user.email);
    console.log("Nombre:", user.displayName);
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
