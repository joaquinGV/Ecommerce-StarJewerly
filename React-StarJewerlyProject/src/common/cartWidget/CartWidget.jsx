import { BsFillCartCheckFill } from "react-icons/bs";

const CartWidget = () => {
  return (
    <div>
      <BsFillCartCheckFill color="blue" size={30} title="Carrito Incompleto" />
    </div>
  );
};

export default CartWidget;
