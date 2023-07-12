import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

export default function CartWidget() {
  return (
    <>
      <Link to="/Ecommerce-StarJewerly/cart">
        <IconButton
          size="large"
          aria-label="shopping Cart items"
          color="inherit"
        >
          <Badge badgeContent={4} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Link>
    </>
  );
}
