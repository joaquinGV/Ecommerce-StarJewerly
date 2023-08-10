import MyComponent from "./MyComponent";

const Home = () => {
  return (
    <div>
      <header>
        <h1>Bienvenido a nuestra tienda nocturna</h1>
      </header>

      <div>
        {/* Carrusel de imágenes */}
        <MyComponent />
      </div>
      {/* Pie de página */}
      <footer>{/* Contenido del pie de página */}</footer>
    </div>
  );
};

export default Home;
