// Footer.jsx
import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social">
        <h3>Redes Sociales</h3>
        <div className="social-icons">
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
        </div>
      </div>
      <div className="about">
        <h3>Sobre Nosotros</h3>
        <ul>
          <li>
            <a href="#">Quiénes Somos</a>
          </li>
          <li>
            <a href="#">Perfil de Creador</a>
          </li>
        </ul>
      </div>
      <div className="customer-service">
        <h3>Servicio al Cliente</h3>
        <ul>
          <li>Preguntas frecuentes</li>
          <li>Contacto</li>
          <li>Envíos y devoluciones</li>
        </ul>
      </div>
      <div className="privacy">
        <p>© 2023 Todos los derechos reservados</p>
        <div className="privacy-links">
          <a href="#">Política de privacidad</a>
          <a href="#">Términos y condiciones</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
