import CounterContainer from "./components/common/counter/CounterContainer";
import Navbar from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/page/itemList/ItemListContainer";
import FetchingData from "./components/page/fetchingData/FetchingData";
import FetchingDB from "./components/page/ferchingDB/FetchingDB";
import Counter from "./components/common/counter/Counter";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRoutes";
import CartContextComponent from "./context/cartContext";

function App() {
  return (
    <BrowserRouter>
      <CartContextComponent>
        <AppRouter />
      </CartContextComponent>
    </BrowserRouter>
  );
}

export default App;

<div>
  <Navbar>
    <ItemListContainer />
    <Counter stock={10} onAdd={1} />
    <CounterContainer stock={5} onAdd={1} />
    <FetchingData />
    <FetchingDB />
  </Navbar>
</div>;
