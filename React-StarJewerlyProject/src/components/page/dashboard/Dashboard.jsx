import { Button } from "@mui/material";
import { database } from "../../../../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import useFetch from "../../../utils/hooks/useFetch";

const Dashboard = () => {
  const { data } = useFetch("/src/api/db2.json");
  const rellenar = () => {
    data.forEach((products) => {
      let refCollection = collection(database, "products");
      addDoc(refCollection, products);
    });
  };

  return (
    <div>
      <Button onClick={rellenar} disabled>
        {"true"}
        Rellenar componentes
      </Button>
    </div>
  );
};

export default Dashboard;
