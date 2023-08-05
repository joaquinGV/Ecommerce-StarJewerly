import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
// import { UserContext } from "../../../context/UserContext"; // Importa el contexto de usuario
import "./Register.css"; // Importa los estilos
import { database } from "../../../../firebaseConfig";
// import GoogleIcon from "@mui/icons-material/Google";

const Register = () => {
  const { cart, getTotalPrice } = useContext(CartContext);
  const [orderId, setOrderId] = useState("");
  // const { loginGoogle } = useContext(UserContext); // Importa la función loginGoogle

  let total = getTotalPrice();

  const { handleSubmit, handleChange, errors, values, touched, handleBlur } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
        repasword: "",
      },
      onSubmit: (data) => {
        let order = {
          buyer: data,
          items: cart,
          total,
          date: serverTimestamp(),
        };

        // Crear orden en firebase

        const ordersCollection = collection(database, "orders");
        addDoc(ordersCollection, order).then((res) => setOrderId(res.id));
        // .catch((err) => console.log("Error adding doc:", err));

        // Crear cambio de stock en Firebase
        cart.forEach((element) => {
          updateDoc(doc(database, "products", element.id), {
            stock: element.stock - element.quantity,
          });
        });
      },
      validationSchema: Yup.object({
        name: Yup.string()
          .required("Este campo es obligatorio")
          .min(3, "El nombre debe tener al menos 3 caracteres")
          .max(10),
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
    <div className="form-container">
      {orderId ? (
        <div className="order-confirmation">
          <h3>Gracias por su compra</h3>
          <h4>Su número de compra es: {orderId}</h4>
          <Link to="/Ecommerce-StarJewerly/tienda">Volver al menú</Link>
        </div>
      ) : (
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
      )}
      {/* <div className="google-login">
        <Button
          onClick={loginGoogle}
          variant="contained"
          className="google-button"
        >
          <GoogleIcon />
          Iniciar sesión con Google
        </Button>
      </div> */}
      <p>
        ¿Ya tienes una cuenta? &nbsp;
        <Link to="/Ecommerce-StarJewerly/login">Iniciar sesión</Link>
      </p>
    </div>
  );
};

export default Register;
