// src/components/ProductCard.js
import React from "react";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";

function ProductCard({ product, addToCart }) {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="140"
        image={product.image || "https://via.placeholder.com/300"}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="body1">R$ {product.price}</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => addToCart(product)}
          fullWidth
        >
          Adicionar ao Carrinho
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
