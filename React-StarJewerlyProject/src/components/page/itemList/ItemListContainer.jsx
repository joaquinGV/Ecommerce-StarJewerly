/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { products } from "../../../productsMock";
import ItemList from "./ItemList";
import useFetch from "../../../utils/hooks/useFetch";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState({});
  const { data } = useFetch("/src/api/db2.json");
  const [mooncy, setMooncy] = useState([]);

  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      resolve("/src/api/db.json");
    });

    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((error) => setError(error));
  }, []);

  useEffect(() => {
    const dataFetch = fetch("/src/api/db2.json");
    dataFetch.then((res) => res.json()).then((res) => setMooncy(res));
  }, []);

  return <ItemList items={data} />;
};

export default ItemListContainer;
