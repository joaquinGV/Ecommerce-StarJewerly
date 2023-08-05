import CartContainer from "../components/page/cart/CartContainer";
import Register from "../components/page/register/Register";
import home from "../components/page/home/home";
import ItemDetail from "../components/page/itemDetail/ItemDetail";
import ItemListContainer from "../components/page/itemList/ItemListContainer";
import login from "../components/page/login/login";
import Profile from "../components/page/profile/Profile";

export const routes = [
  {
    id: "home",
    path: "/Ecommerce-StarJewerly/",
    Element: home,
  },
  {
    id: "categories",
    path: "/Ecommerce-StarJewerly/category/:categoryName",
    Element: ItemListContainer,
  },
  {
    id: "login",
    path: "/Ecommerce-StarJewerly/login",
    Element: login,
  },
  {
    id: "store",
    path: "/Ecommerce-StarJewerly/tienda",
    Element: ItemListContainer,
  },
  {
    id: "category id",
    path: "/Ecommerce-StarJewerly/category/:id",
    Element: ItemListContainer,
  },
  {
    id: "details",
    path: "/Ecommerce-StarJewerly/item/:id",
    Element: ItemDetail,
  },
  {
    id: "cart",
    path: "/Ecommerce-StarJewerly/cart",
    Element: CartContainer,
  },
  {
    id: "checkout",
    path: "/Ecommerce-StarJewerly/checkout",
    Element: Register,
  },
  {
    id: "oferts",
    path: "/Ecommerce-StarJewerly/ofertas",
    Element: Register,
  },
  {
    id: "profile",
    path: "/Ecommerce-StarJewerly/profile",
    Element: Profile,
  },
  {
    id: "register",
    path: "/Ecommerce-StarJewerly/registrarse",
    Element: Register,
  },
];