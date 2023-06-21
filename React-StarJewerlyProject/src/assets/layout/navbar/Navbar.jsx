import CartWidget from "../../../common/cartWidget/CartWidget";

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
    </div>
  );
};

export default Navbar;
