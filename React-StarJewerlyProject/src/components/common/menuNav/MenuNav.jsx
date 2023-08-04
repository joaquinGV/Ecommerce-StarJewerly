import React from "react";
import { IconButton, Menu, MenuItem, Fade } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const MenuNav = ({ theme }) => {
  const userRol = "user";
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (url) => {
    setAnchorEl(null);

    if (url) {
      navigate(`/Ecommerce-StarJewerly${url}`);
    }
  };

  return (
    <div>
      <IconButton
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        theme={theme}
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose(null)}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={() => handleClose("/")}>Inicio</MenuItem>
        <MenuItem onClick={() => handleClose("/tienda")}>Tienda</MenuItem>
        <MenuItem onClick={() => handleClose("/ofertas")}>Ofertas</MenuItem>
        <MenuItem onClick={() => handleClose("/habitaciones")}>
          Habitaciones
        </MenuItem>
        <MenuItem onClick={() => handleClose("/help")}>Ayuda</MenuItem>
        {userRol === "admin" && (
          <MenuItem onClick={() => handleClose("/dashboard")}>
            Dashboard
          </MenuItem>
        )}
      </Menu>
    </div>
  );
};

export default MenuNav;
