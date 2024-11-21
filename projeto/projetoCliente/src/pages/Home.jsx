// src/pages/Home.js
import React from "react";
import { Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Box textAlign="center" sx={{ mt: 5 }}>
      <Typography variant="h3">Bem-vindo à Loja Virtual</Typography>
      <Typography variant="h5" sx={{ mt: 2 }}>
        Encontre os melhores produtos com os melhores preços!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 3 }}
        component={Link}
        to="/products"
      >
        Ver Produtos
      </Button>
    </Box>
  );
}

export default Home;
