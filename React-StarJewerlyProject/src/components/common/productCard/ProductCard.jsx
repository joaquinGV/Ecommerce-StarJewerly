import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Counter from "../counter/Counter";
import { Link } from "react-router-dom";

const ProductCard = ({ elemento, isInItemList = true }) => {
  return (
    <Card sx={{ width: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={elemento.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {elemento.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {elemento.description}
        </Typography>
      </CardContent>
      <CardActions>
        {isInItemList ? (
          <Link to={`/Ecommerce-StarJewerly/item/${elemento.id}`}>
            <Button size="small">Ver detalle</Button>
          </Link>
        ) : (
          <Button size="small">Eliminar del carrito</Button>
        )}
      </CardActions>
    </Card>
  );
};

export default ProductCard;
