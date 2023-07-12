// import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link } from "react-router-dom";
// import useFetch from "../../../utils/hooks/useFetch";
import { useState } from "react";

export default function SelectCategory({ data }) {
  const [category, setCategory] = useState("");
  // const [difCategory, setDifCategory] = useState([]);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  //   const { data } = useFetch("/src/api/db2.json");
  const categorias = Array.from(new Set(data.map((obj) => obj.category)));

  console.log("Categorias unicas:", categorias);

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 140 }}>
        <InputLabel id="demo-simple-select-autowidth-label">
          Category
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={category}
          onChange={handleChange}
          autoWidth
          label="Category"
        >
          {categorias.map((cat) => {
            return (
              <Link key={cat.id} to={`/Ecommerce-StarJewerly/category/${cat}`}>
                <MenuItem value={cat}>{cat}</MenuItem>
              </Link>
            );
          })}
          <MenuItem value="">
            <Link to="/Ecommerce-StarJewerly/tienda">
              <em>None</em>
            </Link>
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
