import "./home.css";

const MyComponent = () => {
  return (
    <div style={{ width: "100%" }}>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://res.cloudinary.com/dobejqlcu/image/upload/v1691696692/Mooncy/Habitacion-viaje-espacio_fu41lt.jpg"
              className="d-block w-100"
              style={{ maxHeight: "500px" }}
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://res.cloudinary.com/dobejqlcu/image/upload/v1691696414/Mooncy/acogedor-dormitorio-moderno-iluminado-lampara-electrica-brillante-generada-ia_tczz22.jpg"
              className="d-block w-100"
              style={{ maxHeight: "500px" }}
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://res.cloudinary.com/dobejqlcu/image/upload/v1691696916/Mooncy/dormitorio-nino-decorado-arte-pared-espacial-cielo-estrellado_875722-7906-transformed_gvbnlg.jpg"
              className="d-block w-100"
              style={{ maxHeight: "500px" }}
              alt="Third slide"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
          style={{ fontSize: "2rem", width: "50px" }}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
          style={{ fontSize: "2rem", width: "50px" }}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default MyComponent;
