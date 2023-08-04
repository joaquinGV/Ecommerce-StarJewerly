import ProductCard from "../../common/productCard/ProductCard";
import SelectCategory from "../../common/selectCategory/SelectCategory";
import { Skeleton } from "@mui/material";

const ItemList = ({ items }) => {
  let arr = [1, 2, 3, 4];

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
          // paddingBottom: "15px",
          rowGap: "15px",
        }}
      >
        {items.length > 0
          ? items.map((elemento) => {
              return <ProductCard key={elemento.id} elemento={elemento} />;
            })
          : arr.map((e) => {
              return (
                <div key={e}>
                  <Skeleton variant="rounded" width={290} height={90} />
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "1.6rem" }}
                    width={160}
                  />
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                    width={290}
                  />
                  <Skeleton
                    variant="rounded"
                    sx={{ fontSize: "1rem", marginTop: "10px" }}
                    width={80}
                  />
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default ItemList;
