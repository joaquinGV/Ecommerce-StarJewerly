import ProductCard from "../../common/productCard/ProductCard";
import SelectCategory from "../../common/selectCategory/SelectCategory";
import { Skeleton } from "@mui/material";

const ItemList = ({ items }) => {
  console.log("llego al presentacional los items: ", items);
  console.log({ items });
  console.log(items);
  let arr = [1, 2];

  return (
    <div>
      <h1>Aca van los productos</h1>
      <SelectCategory data={[]} />

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {items.length > 0
          ? items.map((elemento) => {
              return <ProductCard key={elemento.id} elemento={elemento} />;
            })
          : arr.map((e) => {
              return (
                <div key={e}>
                  <Skeleton variant="rectangular" width={210} height={60} />
                  {/* <Skeleton variant="circular" width={40} height={40} /> */}
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "1.3rem" }}
                    width={100}
                  />
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                    width={200}
                  />
                  <Skeleton variant="rounded" width={210} height={60} />
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default ItemList;
