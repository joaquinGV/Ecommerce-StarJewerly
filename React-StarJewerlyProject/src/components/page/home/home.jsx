import Carrousel from "./Carrousel";
import HomeCard from "./HomeCard";
import PaymentMethods from "./PaymentMethods";

const Home = () => {
  return (
    <div>
      <header style={{ textAlign: "center" }}>
        <h1>Construye el cuarto de tus sueños</h1>
      </header>

      <div>
        {/* Carrusel de imágenes */}
        <Carrousel />
        <PaymentMethods />
        <HomeCard categoryName={"lights"} Title={"Luces"} />
        <HomeCard categoryName={"decoration"} Title={"Decoracion"} />
      </div>
      {/* Pie de página */}
      <footer>{/* Contenido del pie de página */}</footer>
    </div>
  );
};

export default Home;
