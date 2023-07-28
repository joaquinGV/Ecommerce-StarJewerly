/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from "react";
import useFetch from "../../../utils/hooks/useFetch";
import Counter from "../../common/counter/Counter";
import { useParams } from "react-router-dom";
import "./itemDetail.css";
import { database } from "../../../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";
import { CartContext } from "../../../context/cartContext";
import CounterContainer from "../../common/counter/CounterContainer";

const ItemDetail = () => {
  const { addToCart, getQuantityById } = useContext(CartContext);

  const { id } = useParams();

  const [producto, setProducto] = useState({});

  const totalQuantity = getQuantityById(id);
  // console.log(totalQuantity);

  useEffect(() => {
    let productsCollection = collection(database, "products");
    let productRef = doc(productsCollection, id);
    getDoc(productRef).then((res) => {
      setProducto({ ...res.data(), id: res.id });
    });
  }, [id]);

  const onAdd = (cantidad) => {
    let productCart = { ...producto, quantity: cantidad };
    console.log("Añadir al carrito");
    addToCart(productCart);
  };

  console.log("Producto es:", producto);
  // if (producto) {
  return (
    <div className="containerItems">
      <div className="ItemsDisplayed">
        <h2>{producto.title} </h2>
        <h4>Precio: ${producto.price} </h4>
        <h4>Descripcion: {producto.description}</h4>
        <h4>Categoria: {producto.category}</h4>
        <img src={`${producto.img}`} width={400} height={400} />
        <CounterContainer
          stock={producto.stock}
          onAdd={onAdd}
          initial={totalQuantity}
        />
      </div>
    </div>
  );
};
// };

export default ItemDetail;
