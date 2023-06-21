import CartWidget from "../../../common/cartWidget/CartWidget";
import CustomizedBadges from "../../../common/cartWidget2/CartWidget2";

const Navbar = () => {
  return (
    <div>
      <h2>Logo</h2>
      <ul>
        <li>Inicio</li>
        <li>About</li>
        <li>Contacto</li>
      </ul>
      <CartWidget />
      <CustomizedBadges />
    </div>
  );
};

export default Navbar;
