import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import React from "react";
import { NavLink } from "react-router-dom";

const MenuNav = ({ theme }) => {
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
          <NavLink to="/Ecommerce-StarJewerly/">Inicio</NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink to="/Ecommerce-StarJewerly/tienda">Tienda</NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink to="/Ecommerce-StarJewerly/ofertas">Ofertas</NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink to="/Ecommerce-StarJewerly/habitaciones">
            Habitaciones
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink to="/Ecommerce-StarJewerly/help">Ayuda</NavLink>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default MenuNav;
