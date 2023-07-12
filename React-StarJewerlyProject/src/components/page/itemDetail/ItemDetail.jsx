// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import useFetch from "../../../utils/hooks/useFetch";
import Counter from "../../common/counter/Counter";
import { useParams } from "react-router-dom";
import "./itemDetail.css";

const ItemDetail = () => {
  const { data } = useFetch("/src/api/db2.json");
  console.log("Data:", data);

  const { Itemid } = useParams();

  const [producto, setProducto] = useState();
  console.log("Item ID:", Itemid);

  useEffect(() => {
    let productoSeleccionado = data.find((element) => element.id === +Itemid);
    console.log(productoSeleccionado);
    const tarea = new Promise((res, rej) => {
      res(productoSeleccionado);
    });
    tarea.then((res) => setProducto(res));
  }, [Itemid, data, producto]);

  console.log("Producto es:", producto);

  const onAdd = (cantidad) => {
    console.log("catntidad", cantidad);
    console.log("producto", producto);
  };

  if (producto) {
    return (
      <div className="containerItems">
        <div className="ItemsDisplayed">
          <h2>{producto.title} </h2>
          <h4>Precio: ${producto.price} </h4>
          <h4>Descripcion: {producto.description}</h4>
          <h4>Categoria: {producto.category}</h4>
          <img src={`${producto.img}`} width={400} height={400} />
          <Counter stock={producto.stock} onAdd={onAdd} />
        </div>
      </div>
    );
  }
};

export default ItemDetail;
