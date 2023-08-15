// ProductCard.js
import { Skeleton } from "@mui/material";
import "./css/HomeCard.css"; // Agrega el archivo CSS para los estilos
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { database } from "../../../../firebaseConfig";
import { useNavigate } from "react-router-dom";

const HomeCard = ({ categoryName, Title }) => {
  const [items, setItems] = useState([]);
  let arr = [1, 2, 3, 4];
  // let categoryName = "lights";
  const navigate = useNavigate();

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
      let productos = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });

      setItems(productos.slice(0, 5));
    });
  }, [categoryName]);

  const itemDetails = (id) => {
    navigate(`/Ecommerce-StarJewerly/item/${id}`);
  };

  return (
    <>
      <h3 className="boxesTitle">Relacionado con {Title}</h3>
      <div className="boxesContainer">
        {items.length > 0
          ? items.map((elemento) => {
              return (
                <div
                  className="cardBox"
                  key={elemento.id}
                  onClick={() => itemDetails(elemento.id)}
                >
                  <div className="card">
                    <div className="front">
                      <img
                        src={elemento.img}
                        alt={elemento.name}
                        className="product-image"
                      />
                      <p className="product-price">${elemento.price}</p>
                    </div>
                    <div className="back">
                      <h3 className="product-name">{elemento.name}</h3>
                      <p className="product-description">
                        {elemento.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          : arr.map((e) => {
              return (
                <div key={e}>
                  <Skeleton variant="rounded" width={290} height={90} />
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "1.6rem" }}
                    width={160}
                  />
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                    width={290}
                  />
                  <Skeleton
                    variant="rounded"
                    sx={{ fontSize: "1rem", marginTop: "10px" }}
                    width={80}
                  />
                </div>
              );
            })}
      </div>
    </>
  );
};

export default HomeCard;
