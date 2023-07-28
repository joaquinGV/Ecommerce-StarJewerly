import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/cartContext";

export default function CartWidget() {
  const { getTotalQuantity } = useContext(CartContext);
  let total = getTotalQuantity();
  return (
    <>
      <Link to="/Ecommerce-StarJewerly/cart">
        <IconButton
          size="large"
          aria-label="shopping Cart items"
          color="inherit"
        >
          <Badge badgeContent={total} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Link>
    </>
  );
}
