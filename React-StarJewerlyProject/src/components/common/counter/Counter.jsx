import { Button, ButtonGroup, Input, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import useCounter from "../../../utils/hooks/useCounter";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Outlet } from "react-router-dom";

const Counter = ({ contador, sumar, restar, reset, onAdd }) => {
  // const { contador, sumar, restar, reset } = useCounter(1, stock);

  return (
    <>
      <Outlet />
      <Stack
        sx={{
          TextAlign: "center",
          color: "#F4F9E9",
          backgroundColor: "#F4F9E9",
          width: "auto",
          maxWidth: "500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        }}
        direction="row"
        style={{ border: "3px solid #F4F9E9", padding: "10px" }}
      >
        <Input
          type="number"
          placeholder="Numero de items"
          color="error"
          variant="outlined"
          readOnly={true}
          value={contador}
        />
        <ButtonGroup size="small" aria-label="small filledTonal button group">
          <Button onClick={sumar}>
            <AddIcon />
          </Button>
          <Button onClick={restar}>
            <RemoveIcon />
          </Button>
          <Button onClick={reset}>
            <RestartAltIcon />
          </Button>
          <Button onClick={() => onAdd(contador)}>
            <AddShoppingCartIcon />
          </Button>
        </ButtonGroup>
      </Stack>
    </>
  );
};

export default Counter;
