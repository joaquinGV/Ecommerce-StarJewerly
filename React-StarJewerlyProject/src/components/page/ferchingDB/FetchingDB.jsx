import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/base";
// import { Button } from "@mui/base";

const FetchingDB = () => {
  const [products, setProducts] = useState([]);
  const [productSelected, setProductSelected] = useState({});

  useEffect(() => {
    let data = axios.get("http://localhost:5000/products");
    data.then((res) => setProducts(res.data));
  }, []);

  useEffect(() => {
    let data = axios.get("http://localhost:5000/products/1");
    data.then((res) => setProductSelected(res.data));
  }, []);


  //  CREATE --- POST

  const createProduct = () => {
    let newProduct = {
      title: "Lámpara Pluton",
      price: 500,
      stock: 10,
      description: "Lámpara de Pluton colgante",
      category: "Luces",
      img: "https://res.cloudinary.com/dobejqlcu/image/upload/v1688158665/Mooncy/magnetic_moon.jpg",
    };

    let data = axios.post("http://localhost:5000/products", newProduct);
  };

  let id = 3;
  let nuevaInfo = {
    title: "Nuevo Titulo",
    price: 200,
  };

  const updateProduct = (id, informacion) => {
    // let data = axios.patch(`http://localhost:5000/products/${id}`, informacion);
    let data = axios.put(`http://localhost:5000/products/${id}`, informacion);
  };

  const deleteProductById = (id) => {
    let data = axios.delete(`http://localhost:5000/products/${id}`);
  };

  return (
    <div>
      <h2>Probando FetchingDB</h2>
      <Button onClick={createProduct}>Crear Producto</Button>
      <Button onClick={() => updateProduct(id, nuevaInfo)}>
        Actualizar producto por ID
      </Button>
      <Button onClick={() => deleteProductById(5)}>Borrar producto 4</Button>
    </div>
  );
};

export default FetchingDB;
