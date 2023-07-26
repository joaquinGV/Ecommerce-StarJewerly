/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import useFetch from "../../../utils/hooks/useFetch";
import { useParams } from "react-router-dom";
import { database } from "../../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState({});
  const { data } = useFetch("/src/api/db2.json");
  const { categoryName } = useParams();

  // useEffect(() => {
  //   // let productosFiltrados = data.filter(
  //   //   (elemento) => elemento.category === categoryName
  //   // );
  //   // const tarea = new Promise((resolve, rej) => {
  //   //   resolve(categoryName === undefined ? data : productosFiltrados);
  //   // });
  //   // tarea.then((res) => setItems(res)).catch((err) => setError(err));
  // }, [categoryName]);

  useEffect(() => {
    let productsCollection = collection(database, "products");
    let consulta;
    if (categoryName) {
      consulta = query(
        productsCollection,
        where("category", "==", categoryName)
      );
    } else {
      consulta = productsCollection;
    }

    getDocs(consulta).then((res) => {
      console.log("Consulta", res.docs);
      let productos = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });

      setItems(productos);
    });
  }, [categoryName]);

  return <ItemList items={categoryName ? items : data} data={data} />;
};

export default ItemListContainer;
