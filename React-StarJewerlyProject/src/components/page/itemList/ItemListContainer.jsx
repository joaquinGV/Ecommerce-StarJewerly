/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { products } from "../../../productsMock";
import ItemList from "./ItemList";
import useFetch from "../../../utils/hooks/useFetch";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState({});
  const { data } = useFetch("/src/api/db2.json");
  const { categoryName } = useParams();

  useEffect(() => {
    let productosFiltrados = data.filter(
      (elemento) => elemento.category === categoryName
    );
    const tarea = new Promise((resolve, rej) => {
      resolve(categoryName === undefined ? data : productosFiltrados);
    });
    tarea.then((res) => setItems(res)).catch((err) => setError(err));
  }, [categoryName]);

  return <ItemList items={categoryName ? items : data} data={data} />;
};

export default ItemListContainer;
