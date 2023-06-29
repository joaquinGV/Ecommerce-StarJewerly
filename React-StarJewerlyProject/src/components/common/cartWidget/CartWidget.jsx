
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function CustomizedBadges() {
  return (
    <>
      <IconButton size="large" aria-label="shopping Cart items" color="inherit">
        <Badge badgeContent={4} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </>
  );
}
