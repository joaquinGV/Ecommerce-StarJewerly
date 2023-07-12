import CounterContainer from "./components/common/counter/CounterContainer";
import Navbar from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/page/itemList/ItemListContainer";
import FetchingData from "./components/page/fetchingData/FetchingData";
import FetchingDB from "./components/page/ferchingDB/FetchingDB";
import Counter from "./components/common/counter/Counter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ItemDetail from "./components/page/itemDetail/ItemDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/Ecommerce-StarJewerly/"
            element={<h1>Este es el home</h1>}
          />
          <Route
            path="/Ecommerce-StarJewerly/category/:categoryName"
            element={<ItemListContainer />}
          />
          <Route
            path="/Ecommerce-StarJewerly/login"
            element={<h1>Este es el login</h1>}
          />
          <Route
            path="/Ecommerce-StarJewerly/tienda"
            element={<ItemListContainer />}
          />
          <Route
            path="/Ecommerce-StarJewerly/category/:id"
            element={<ItemListContainer />}
          />
          <Route
            path="/Ecommerce-StarJewerly/item/:Itemid"
            element={<ItemDetail />}
          />
          <Route
            path="/Ecommerce-StarJewerly/checkout"
            element={<h1>Este es el </h1>}
          />
        </Route>
        <Route path="*" element={<h1> 404 not found</h1>} />
      </Routes>
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
