import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useContext } from "react";
import {} from "../../../context/CartContext";
import { UserContext } from "../../../context/UserContext"; // Importa el contexto de usuario
import "./Register.css";
import CloseIcon from "@mui/icons-material/Close";

const Register = ({ onClose, login }) => {
  const { registerUser } = useContext(UserContext); // Importa la función loginGoogle

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("popup-overlay")) {
      onClose();
    }
  };

  const handleLoginButtonClick = () => {
    onClose(); // Cierra la ventana emergente
    login();
  };

  const { handleSubmit, handleChange, errors, values, touched, handleBlur } =
    useFormik({
      initialValues: {
        name: "",
        phone: "",
        email: "",
        password: "",
        repasword: "",
      },
      onSubmit: (data) => {
        console.log(data);
        registerUser(data.email, data.password, data.name, data.phone);
      },
      validationSchema: Yup.object({
        name: Yup.string()
          .required("Este campo es obligatorio")
          .min(3, "El nombre debe tener al menos 3 caracteres")
          .max(20),
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
        repasword: Yup.string()
          .required("Este campo es obligatorio")
          .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
      }),
      validateOnChange: false,
      validateOnBlur: true,
    });

  return (
    <div className="popup-overlay" onClick={handleOverlayClick}>
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>
          <CloseIcon />
        </button>
        <h2>Registrarse</h2>
        <div className="form-container">
          <form className="registration-form" onSubmit={handleSubmit}>
            <TextField
              label="Nombre"
              variant="outlined"
              name="name"
              error={touched.name && !!errors.name}
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.name}
              helperText={touched.name && errors.name}
            />
            <TextField
              label="Teléfono"
              variant="outlined"
              name="phone"
              type="tel"
              error={touched.phone && !!errors.phone}
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.phone}
              helperText={touched.phone && errors.phone}
            />
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
            <TextField
              label="Repetir Contraseña"
              variant="outlined"
              name="repasword"
              type="password"
              error={touched.repasword && !!errors.repasword}
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.repasword}
              helperText={touched.repasword && errors.repasword}
            />
            <Button type="submit" variant="contained" sx={{ margin: "10px" }}>
              Registrarse
            </Button>
          </form>
          <p>
            ¿Ya tienes una cuenta? &nbsp;
            <button onClick={handleLoginButtonClick}>Iniciar sesión</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
