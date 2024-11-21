// src/pages/Cart.js
import React, { useState } from "react";
import { Box, Typography, List, ListItem, ListItemText, Button } from "@mui/material";

function Cart() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Seu Carrinho
      </Typography>
      <List>
        {cart.map((item, index) => (
          <ListItem key={index}>
            <ListItemText primary={item.name} secondary={`R$ ${item.price}`} />
            <Button
              variant="outlined"
              color="error"
              onClick={() => removeFromCart(index)}
            >
              Remover
            </Button>
          </ListItem>
        ))}
      </List>
      <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        Finalizar Compra
      </Button>
    </Box>
  );
}

export default Cart;
