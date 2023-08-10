import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ display: { xs: "none", sm: "block" } }}
      >
        <Link to="/Ecommerce-StarJewerly/" className="link">
          <img
            src="https://res.cloudinary.com/dobejqlcu/image/upload/v1691698670/Mooncy/logo-no-background_aukcjk_c1h6sm.svg"
            style={{ width: "140px" }}
          />
        </Link>
      </Typography>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ display: { xs: "block", sm: "none" }, mr:2 }}
      >
        <Link to="/Ecommerce-StarJewerly/" className="link">
          <img
            src="https://res.cloudinary.com/dobejqlcu/image/upload/v1691698981/Mooncy/mooncy-website-favicon-color_nv5zqg.png"
            style={{ width: "45px"}}
          />
        </Link>
      </Typography>
    </div>
  );
};

export default Logo;
