import CounterContainer from "./components/common/counter/CounterContainer";
import Navbar from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/page/itemList/ItemListContainer";
import FetchingData from "./components/page/fetchingData/FetchingData";
import FetchingDB from "./components/page/ferchingDB/FetchingDB";

function App() {
  return (
    <div>
      <Navbar>
        <ItemListContainer />
        <CounterContainer stock={5} onAdd={1} />
        <FetchingData />
        <FetchingDB />
      </Navbar>
    </div>
  );
}

export default App;
