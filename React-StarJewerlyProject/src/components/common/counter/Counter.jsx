import { Button, ButtonGroup, Input } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import useCounter from "../../../utils/hooks/useCounter";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Counter = ({ stock, onAdd }) => {
  const { contador, sumar, restar, reset } = useCounter(1, stock);

  return (
    <div style={{ border: "3px solid steelblue", padding: "10px" }}>
      <ButtonGroup size="small" aria-label="small contained button group">
        <Button onClick={sumar}>
          <AddIcon />
        </Button>
        <Input
          type="number"
          placeholder="Numero de items"
          color="primary"
          variant="outlined"
          readOnly={true}
          value={contador}
        />
        <Button onClick={restar}>
          <RemoveIcon />
        </Button>
        <Button onClick={reset}>
          <RestartAltIcon />
        </Button>
        <Button
          onClick={() => {
            onAdd;
          }}
        >
          <AddShoppingCartIcon />
        </Button>
      </ButtonGroup>
      {/* <button onClick={sumar}>sumar</button>
      <h3>{contador}</h3>
      <button onClick={restar}>restar</button>

      <button onClick={() => onAdd(contador)}>Agregar al carrito</button> */}
    </div>
  );
};

export default Counter;
