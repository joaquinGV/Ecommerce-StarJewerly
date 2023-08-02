import React from "react";
import { IconButton, Menu, MenuItem, Fade } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

const MenuNav = ({ theme }) => {
  const userRol = "user";
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>
          <NavLink to="/Ecommerce-StarJewerly/" className="menu-link">
            Inicio
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink to="/Ecommerce-StarJewerly/tienda" className="menu-link">
            Tienda
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink to="/Ecommerce-StarJewerly/ofertas" className="menu-link">
            Ofertas
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink to="/Ecommerce-StarJewerly/habitaciones" className="menu-link">
            Habitaciones
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink to="/Ecommerce-StarJewerly/help" className="menu-link">
            Ayuda
          </NavLink>
        </MenuItem>
        {userRol === "admin" && (
          <MenuItem onClick={handleClose}>
            <NavLink to="/Ecommerce-StarJewerly/dashboard" className="menu-link">
              Dashboard
            </NavLink>
          </MenuItem>
        )}
      </Menu>
    </div>
  );
};

export default MenuNav;
