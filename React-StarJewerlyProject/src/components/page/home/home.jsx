import Carrousel from "./Carrousel";
import HomeCard from "./HomeCard";
import PaymentMethods from "./PaymentMethods";

const Home = () => {
  return (
    <div>
      <header>
        <h1>Construye el cuarto de tus sueños</h1>
      </header>

      <div>
        {/* Carrusel de imágenes */}
        <Carrousel />
        <PaymentMethods />
        <HomeCard />
      </div>
      {/* Pie de página */}
      <footer>{/* Contenido del pie de página */}</footer>
    </div>
  );
};

export default Home;
