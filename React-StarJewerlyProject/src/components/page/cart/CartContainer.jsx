import { useContext } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import "./CartContainer.css";
import DeleteIcon from "@mui/icons-material/Delete";

const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();

  const limpiar = () => {
    Swal.fire({
      title: "¿Estás seguro de que quieres limpiar el carrito?",
      showDenyButton: true,
      confirmButtonText: "Sí, eliminar",
      denyButtonText: "No, conservar",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito limpiado exitosamente", "", "success");
      }
    });
  };

  return (
    <div>
      {cart.length > 0 ? (
        <div>
          <h1>Resumen de compra</h1>

          {cart.map((elemento) => (
            <div key={elemento.id} className="cartItem">
              <img
                src={elemento.img}
                alt={elemento.title}
                className="cartItemImage "
              />
              <div className="cartItemDetails">
                <p className="cartItemTitle">{elemento.title}</p>
                <p className="cartItemPrice">Precio: $ {elemento.price}</p>
                <p className="cartItemQuantity">
                  Cantidad: {elemento.quantity}
                </p>
              </div>
              <button
                onClick={() => deleteById(elemento.id)}
                className="cartItemDelete "
              >
                <DeleteIcon />
                Borrar artículo
              </button>
            </div>
          ))}
          <div className="cartTotal">
            <h2>Total: ${total}</h2>
          </div>
          <div className="cartButtons">
            <button onClick={limpiar} className="cartButton clearButton">
              Limpiar carrito
            </button>
            <Link
              to="/Ecommerce-StarJewerly/checkout"
              className="cartButton checkoutButton"
            >
              Finalizar compra
            </Link>
          </div>
        </div>
      ) : (
        <div className="emptyCart">
          <h1>TU CARRITO ESTA VACÍO</h1>
          <img
            src="https://res.cloudinary.com/dobejqlcu/image/upload/v1691123589/Mooncy/carritoVacio_gktnxr.avif"
            alt="Carrito Vacío"
          />
        </div>
      )}
    </div>
  );
};

export default CartContainer;
