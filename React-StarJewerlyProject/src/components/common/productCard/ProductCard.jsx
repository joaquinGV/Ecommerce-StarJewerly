import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import "./ProductCard.css"; // Importa el archivo CSS

const ProductCard = ({ elemento }) => {
  const { addToCart, isInCart, deleteById } = useContext(CartContext);
  const addOne = () => {
    let productCart = { ...elemento, quantity: 1 };
    addToCart(productCart);
  };
  const deleteOne = (id) => {
    deleteById(id);
  };

  const inCart = (id) => {
    const exist = isInCart(id);
    return exist;
  };

  const navigate = useNavigate();

  const itemDetails = (id) => {
    navigate(`/Ecommerce-StarJewerly/item/${id}`);
  };

  return (
    <Card sx={{ width: 345 }} className="card">
      <CardMedia
        component="img"
        alt="product name"
        height="140"
        image={elemento.img}
        onClick={() => itemDetails(elemento.id)}
        className="cardMedia"
      />
      <CardContent
        onClick={() => itemDetails(elemento.id)}
        className="cardContent"
      >
        <Typography gutterBottom variant="h5" component="div">
          {elemento.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {elemento.description}
        </Typography>
      </CardContent>
      <CardActions className="cardActions">
        <h4 className="priceTag">Precio: {elemento.price} mxn</h4>
        {elemento.stock > 0 ? (
          !inCart(elemento.id) ? (
            <button className="addButton" size="small" onClick={addOne}>
              Añadir al carrito
            </button>
          ) : (
            <button
              className="removeButton"
              size="small"
              onClick={() => deleteOne(elemento.id)}
            >
              Eliminar del carrito
            </button>
          )
        ) : (
          <h3 className="OutOffStock"> No hay Stock</h3>
        )}
      </CardActions>
    </Card>
  );
};

export default ProductCard;
