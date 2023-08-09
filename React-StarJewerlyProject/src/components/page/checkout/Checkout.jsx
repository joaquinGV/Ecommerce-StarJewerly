import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../../context/CartContext";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import { Link } from "react-router-dom";
import { database } from "../../../../firebaseConfig";
import { UserContext } from "../../../context/UserContext";
import CheckLoginContainer from "../checkLogin/CheckLoginContainer";
import "./checkout.css"; // Importamos los estilos CSS

const CheckoutContainer = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const { user } = useContext(UserContext);
  const [orderId, setOrderId] = useState("");

  useEffect(() => {
    if (user && orderId === "") {
      handleSubmit();
    }
  }, [user, orderId]);

  const handleSubmit = async () => {
    if (!user || orderId !== "") {
      return;
    }

    try {
      const order = {
        buyer: {
          name: user.displayName,
          phone: user.phoneNumber,
          email: user.email,
        },
        items: cart,
        total: getTotalPrice(),
        date: serverTimestamp(),
      };

      const ordersCollection = collection(database, "orders");
      const orderRef = await addDoc(ordersCollection, order);
      setOrderId(orderRef.id);

      await Promise.all(
        cart.map(async (product) => {
          try {
            await updateDoc(doc(database, "products", product.id), {
              stock: product.stock - product.quantity,
            });
          } catch (error) {
            console.log(
              `Error updating stock for product ${product.id}:`,
              error
            );
          }
        })
      );
      clearCart();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      {orderId ? (
        <div className="checkout-container">
          <h1 className="checkout-title">Compra realizada</h1>
          <div className="order-info">
            <div>
              <h3 className="success-message">Gracias por su compra.</h3>
              <h4>Su número de compra es: {orderId}</h4>
              <Link to="/Ecommerce-StarJewerly/tienda" className="link-back">
                Volver a comprar
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <>
          {cart.length > 0 ? (
            !user && <CheckLoginContainer />
          ) : (
            <p>Nada que mostrar</p>
          )}
        </>
      )}
    </>
  );
};
export default CheckoutContainer;
