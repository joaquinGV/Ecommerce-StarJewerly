import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useContext } from "react";
import {} from "../../../context/CartContext";
import { UserContext } from "../../../context/UserContext"; // Importa el contexto de usuario
// import GoogleIcon from "@mui/icons-material/Google";
import CloseIcon from "@mui/icons-material/Close";
import "./login.css";

const Login = ({ onClose }) => {
  const { loginGoogle, loginSession } = useContext(UserContext);

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("popup-overlay")) {
      onClose();
    }
  };

  const { handleSubmit, handleChange, errors, values, touched, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: (data) => {
        console.log(data);
        loginSession(data.email, data.password);
      },
      validationSchema: Yup.object({
        email: Yup.string()
          .email("Ingrese un email válido")
          .required("Este campo es obligatorio"),
        password: Yup.string()
          .required("Este campo es obligatorio")
          .min(6, "La contraseña debe tener al menos 6 caracteres")
          .matches(
            /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
            "La contraseña debe contener diferentes tipos de caracteres"
          ),
      }),
      validateOnChange: false,
      validateOnBlur: true,
    });

  return (
    <div className="popup-overlay" onClick={handleOverlayClick}>
      <div className="popup-content">
        <h2>Iniciar Sesión</h2>
        <button className="close-button" onClick={onClose}>
          <CloseIcon />
        </button>
        <div className="form-container">
          <form className="registration-form" onSubmit={handleSubmit}>
            <TextField
              label="Email"
              variant="outlined"
              name="email"
              error={touched.email && !!errors.email}
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              helperText={touched.email && errors.email}
            />
            <TextField
              label="Contraseña"
              variant="outlined"
              name="password"
              type="password"
              error={touched.password && !!errors.password}
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
              helperText={touched.password && errors.password}
            />
            <Button type="submit" variant="contained">
              Iniciar Sesion
            </Button>
          </form>

          <div className="google-login">
            <Button
              onClick={loginGoogle}
              variant="contained"
              className="google-button"
            >
              {/* <GoogleIcon /> */}
              Iniciar sesión con Google
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
