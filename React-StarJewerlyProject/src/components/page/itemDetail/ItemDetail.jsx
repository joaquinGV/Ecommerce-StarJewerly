import { useContext, useEffect, useState } from "react";
import CounterContainer from "../../common/counter/CounterContainer";
import { useParams } from "react-router-dom";
import { database } from "../../../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";
import { CartContext } from "../../../context/CartContext";
import "./itemDetail.css";
import { Box, Rating } from "@mui/material";

const ItemDetail = () => {
  const { addToCart, getQuantityById } = useContext(CartContext);
  const { id } = useParams();
  const [producto, setProducto] = useState({});
  const totalQuantity = getQuantityById(id);

  //Informacion estatica para star rating
  const staticRatings = {
    stars: 4.4,
    count: 5,
  };

  useEffect(() => {
    let productsCollection = collection(database, "products");
    let productRef = doc(productsCollection, id);
    getDoc(productRef).then((res) => {
      setProducto({ ...res.data(), id: res.id });
    });
  }, [id]);

  const onAdd = (cantidad) => {
    let productCart = { ...producto, quantity: cantidad };
    addToCart(productCart);
  };

  return (
    <div className="containerItems">
      <div className="frameContainer">
        <div className="imageContainer">
          <img src={`${producto.img}`} alt={producto.title} />
        </div>
        <div className="infoContainer">
          <h2>{producto.title}</h2>
          <div className="ratingContainer">
            <Box
              sx={{
                "& > legend": { mt: 2 },
                marginBottom: "5px",
              }}
            >
              <Rating
                name="read-only"
                value={staticRatings.stars}
                precision={0.1}
                readOnly
              />
              {/* <span className="starRating">{staticRatings.stars} Stars</span> */}
              <span className="ratingCount">
                ({staticRatings.count} Ratings)
              </span>
            </Box>
          </div>

          <p>
            <b>Precio:</b> ${producto.price}
          </p>
          <p>
            <b>Descripcion:</b> {producto.description}
          </p>
          <p>
            <b>Categoria:</b> {producto.category}
          </p>
          {producto.stock > 0 ? (
            <CounterContainer
              stock={producto.stock}
              onAdd={onAdd}
              initial={totalQuantity}
            />
          ) : (
            <h3>No hay Stock</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
