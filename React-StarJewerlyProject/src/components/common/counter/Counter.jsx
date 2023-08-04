import { Button, ButtonGroup, Input, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Counter = ({ contador, sumar, restar, reset, onAdd }) => {
  return (
    <Stack
      sx={{
        textAlign: "center",
        color: "#333333",
        backgroundColor: "#F4F9E9",
        width: "auto",
        maxWidth: "500px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        border: "3px solid #F4F9E9",
        padding: "10px",
        borderRadius: "10px",
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
      }}
      direction="row"
      spacing={2}
    >
      <ButtonGroup
        size="small"
        aria-label="small filledTonal button group"
        variant="outlined"
      >
        <Button onClick={restar} sx={{}}>
          <RemoveIcon />
        </Button>
        <Input
          type="number"
          placeholder="Número de items"
          color="primary"
          readOnly={true}
          value={contador}
          sx={{
            alignItems: "center",
            width: "60px",
            fontWeight: "bold",
            paddingLeft: "20px",
          }}
        />
        <Button onClick={sumar}>
          <AddIcon />
        </Button>
        <Button onClick={reset}>
          <RestartAltIcon />
        </Button>
      </ButtonGroup>

      <Button
        onClick={() => onAdd(contador)}
        variant="contained"
        color="primary"
        startIcon={<AddShoppingCartIcon />}
        style={{
          textTransform: "none",
          fontWeight: "bold",
          borderRadius: "5px",
        }}
      >
        Agregar al carrito
      </Button>
    </Stack>
  );
};

export default Counter;
