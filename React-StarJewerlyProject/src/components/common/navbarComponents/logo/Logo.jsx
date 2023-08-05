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
          MOONCY
        </Link>
      </Typography>
    </div>
  );
};

export default Logo;
