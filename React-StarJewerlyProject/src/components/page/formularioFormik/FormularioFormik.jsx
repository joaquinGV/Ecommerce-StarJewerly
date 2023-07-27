import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormularioFormik = () => {
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (data) => {
      console.log(data);
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
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default FormularioFormik;
