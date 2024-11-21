// src/components/Navbar.js
import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Loja Virtual
          </Link>
        </Typography>
        <Button color="inherit" onClick={() => navigate("/products")}>
          Produtos
        </Button>
        <Button color="inherit" onClick={() => navigate("/cart")}>
          Carrinho
        </Button>
        <Button color="inherit" onClick={handleLogout}>
          Sair
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
