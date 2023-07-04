import CounterContainer from "./components/common/counter/CounterContainer";
import Navbar from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/page/itemList/ItemListContainer";
import FetchingData from "./components/page/fetchingData/FetchingData";
import FetchingDB from "./components/page/ferchingDB/FetchingDB";
import Counter from "./components/common/counter/Counter";

function App() {
  return (
    <div>
      <Navbar>
        <ItemListContainer>
          
        </ItemListContainer>
        <Counter stock={10} onAdd={1} />
        {/* <CounterContainer stock={5} onAdd={1} /> */}
        {/* <FetchingData /> */}
        {/* <FetchingDB /> */}
      </Navbar>
    </div>
  );
}

export default App;
