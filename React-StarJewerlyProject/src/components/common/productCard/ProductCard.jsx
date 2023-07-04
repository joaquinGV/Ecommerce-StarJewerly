import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Counter from "../counter/Counter";

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
          <Button size="small">Ver detalle</Button>
        ) : (
          <Button size="small">Eliminar del carrito</Button>
        )}
      </CardActions>
      <Counter stock={elemento.stock} onAdd={1} />
    </Card>
  );
};

export default ProductCard;
