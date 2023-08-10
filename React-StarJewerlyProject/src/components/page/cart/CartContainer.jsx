import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import "./CartContainer.css";
import DeleteIcon from "@mui/icons-material/Delete";
import Login from "../login/login";
import CounterContainer from "../../common/counter/CounterContainer";
import { InputLabel } from "@mui/material";

const CartContainer = () => {
  const {
    cart,
    addToCart,
    clearCart,
    deleteById,
    getTotalPrice,
    getQuantityById,
  } = useContext(CartContext);
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  let total = getTotalPrice();
  const totalQuantity = (id) => {
    return getQuantityById(id);
  };

  const onAdd = (elemento, cantidad) => {
    let productCart = { ...elemento, quantity: cantidad };
    addToCart(productCart);
  };

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

  const toggleLoginPopup = () => {
    setShowLoginPopup(!showLoginPopup);
  };

  const navigate = useNavigate();

  const itemDetails = (id) => {
    navigate(`/Ecommerce-StarJewerly/item/${id}`);
  };

  return (
    <div>
      {cart.length > 0 ? (
        <div>
          <h1>Resumen de compra</h1>

          {cart.map((elemento) => (
            <div key={elemento.id} className="cartItem">
              <div className="itemDetails">
                <img
                  src={elemento.img}
                  alt={elemento.title}
                  className="cartItemImage"
                  onClick={() => itemDetails(elemento.id)}
                />
                <div className="cartItemDetails">
                  <h2
                    className="cartItemTitle"
                    onClick={() => itemDetails(elemento.id)}
                  >
                    {elemento.title}
                  </h2>
                  <p className="cartItemPrice">Precio: $ {elemento.price}</p>
                  <p className="cartItemQuantity">
                    Cantidad: {elemento.quantity}
                  </p>
                </div>
              </div>
              <div className="itemCount">
                <CounterContainer
                  stock={elemento.stock}
                  initial={totalQuantity(elemento.id)}
                  onAdd={onAdd}
                  element={elemento}
                  // onChange={true}
                />
                <div>
                  <p>${elemento.price * elemento.quantity}</p>
                </div>
                <button
                  onClick={() => deleteById(elemento.id)}
                  className="cartItemDelete"
                >
                  <DeleteIcon />

                  <InputLabel
                    sx={{
                      display: ["none", "block", "block"],
                      color: "white",
                    }}
                  >
                    Borrar artículo
                  </InputLabel>
                </button>
              </div>
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
            {showLoginPopup && <Login onClose={toggleLoginPopup} />}
          </div>
        </div>
      ) : (
        <div className="emptyCart">
          <h1>TU CARRITO ESTA VACÍO</h1>
          <img
            src="https://res.cloudinary.com/dobejqlcu/image/upload/v1691123589/Mooncy/carritoVacio_gktnxr.avif"
            alt="Carrito Vacío"
          />
          <Link to={"/Ecommerce-StarJewerly/tienda"} className="storeLink">
            Seguir comprando
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartContainer;
