import PaymentIcon from "@mui/icons-material/Payment";
import "./css/PaymentMethods.css"; // Agrega el archivo CSS para los estilos

const PaymentMethods = () => {
  const paymentMethods = [
    { name: "Visa", icon: <PaymentIcon /> },
    { name: "Mastercard", icon: <PaymentIcon /> },
    { name: "PayPal", icon: <PaymentIcon /> },
    // Agrega más métodos de pago según sea necesario
  ];

  return (
    <div className="payment-container">
      <h4>Métodos de Pago</h4>
      <ul className="payment-list">
        {paymentMethods.map((method, index) => (
          <li key={index} className="payment-item">
            <div className="icon-circle">{method.icon}</div>
            <span className="method-name">{method.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentMethods;
