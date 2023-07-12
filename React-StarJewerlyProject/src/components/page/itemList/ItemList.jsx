import ProductCard from "../../common/productCard/ProductCard";
import SelectCategory from "../../common/selectCategory/SelectCategory";

const ItemList = ({ items, data }) => {
  console.log("llego al presentacional los items: ", items);
  console.log({ items });
  console.log(items);

  return (
    <div>
      <h1>Aca van los productos</h1>
      <SelectCategory data={data} />

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {items.map((elemento) => {
          return <ProductCard key={elemento.id} elemento={elemento} />;
        })}
      </div>
    </div>
  );
};

export default ItemList;
