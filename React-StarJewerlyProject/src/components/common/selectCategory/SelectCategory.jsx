import { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../../../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import "./selectCategory.css";

export default function SelectCategory() {
  const [category, setCategory] = useState([]);
  const [difCategory, setDifCategory] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let productsCollection = collection(database, "products");
    getDocs(productsCollection).then((res) => {
      let categoria = res.docs.map((doc) => {
        return { ...doc.data() };
      });
      let cat = Array.from(new Set(categoria.map((obj) => obj.category)));
      // console.log("cat: ", cat);
      setCategory(cat);
    });
  }, []);

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setDifCategory(selectedCategory);
    if (selectedCategory === "") {
      navigate("/Ecommerce-StarJewerly/tienda");
    } else {
      navigate(`/Ecommerce-StarJewerly/category/${selectedCategory}`);
    }
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 140 }}>
        <InputLabel id="demo-simple-select-autowidth-label">
          Category
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={difCategory}
          onChange={handleCategoryChange}
          autoWidth
          label="Category"
        >
          {category.map((cat) => {
            return (
              <MenuItem key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </MenuItem>
            );
          })}
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
