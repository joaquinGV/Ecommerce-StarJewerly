import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRoutes";
import CartContextComponent from "./context/CartContext";
import UserContextComponent from "./context/UserContext";

function App() {
  return (
    <BrowserRouter>
      <CartContextComponent>
        <UserContextComponent>
          <AppRouter />
        </UserContextComponent>
      </CartContextComponent>
    </BrowserRouter>
  );
}

export default App;
