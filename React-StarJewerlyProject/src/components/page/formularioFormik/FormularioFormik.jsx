import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { database } from "../../../../firebaseConfig";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import { CartContext } from "../../../context/cartContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

const FormularioFormik = () => {
  const { cart, getTotalPrice } = useContext(CartContext);
  const [orderId, setOrderId] = useState("");

  let total = getTotalPrice();

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (data) => {
      let order = {
        buyer: data,
        items: cart,
        total,
        date: serverTimestamp(),
      };
      console.log(order);

      // Crear orden en firebase

      const ordersCollection = collection(database, "orders");
      addDoc(ordersCollection, order)
        .then((res) => setOrderId(res.id))
        .catch((err) => console.log("Error adding doc:", err));

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
        .email("Este campo es obligatorio")
        .required("El email debe contener @"),
      password: Yup.string()
        .required("Este campo es obligatorio")
        .min(6)
        .matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,15}$/, {
          message: "Faltan diferentes tipos de caracteres",
        }),
      repasword: Yup.string()
        .required()
        .oneOf([Yup.ref("password")], "Las contraseñas no coindicen"),
    }),
    validateOnChange: false,
    validateOnBlur: true,
  });

  console.log(errors);

  return (
    <div style={{ padding: "40px" }}>
      {orderId ? (
        <div>
          <h3>Gracias por su compra</h3>
          <h4>Su numero de compra es: {orderId}</h4>
          <Link to="Ecommerce-StarJewerly/tienda"> Volver al menu</Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <TextField
            label="Nombre"
            variant="outlined"
            name="name"
            error={errors.name ? true : false}
            onChange={handleChange}
            helperText={errors.name}
          />
          <TextField
            label="Email"
            variant="outlined"
            name="email"
            error={errors.email ? true : false}
            onChange={handleChange}
            helperText={errors.email}
          />
          <TextField
            label="Pass"
            variant="outlined"
            name="password"
            error={errors.password ? true : false}
            onChange={handleChange}
            helperText={errors.password}
          />
          <TextField
            label="repeat Password"
            variant="outlined"
            name="repasword"
            error={errors.repasword ? true : false}
            onChange={handleChange}
            helperText={errors.repasword}
          />
          <Button type="submit" variant="contained">
            Comprar
          </Button>
        </form>
      )}
    </div>
  );
};

export default FormularioFormik;
