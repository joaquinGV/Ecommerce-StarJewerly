/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
// import { products } from "../../../productsMock";
import ItemList from "./ItemList";
// import useFetch from "../../../utils/hooks/useFetch";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { database } from "../../../../firebaseConfig";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  // const { data } = useFetch("/src/api/db2.json");
  const { categoryName } = useParams();

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
      console.log(res.docs);
      let productos = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });

      setItems(productos);
    });
  }, [categoryName]);

  return (
    <>
      <ItemList items={items} />;
    </>
  );
};

export default ItemListContainer;
