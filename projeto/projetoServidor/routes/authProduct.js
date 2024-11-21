// backend/routes/productRoutes.js
const express = require("express");
const { authenticateToken, authorizeAdmin } = require("../middleware/authMiddleware");
const Product = require("../models/Product");

const router = express.Router();

// Rota para criar um novo produto (Apenas administradores)
router.post("/", authenticateToken, authorizeAdmin, async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Rota para visualizar todos os produtos
router.get("/", async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Rota para visualizar um único produto
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ message: "Produto não encontrado" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Rota para atualizar um produto (Apenas administradores)
router.put("/:id", authenticateToken, authorizeAdmin, async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ message: "Produto não encontrado" });

    await product.update(req.body);
    res.json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Rota para excluir um produto (Apenas administradores)
router.delete("/:id", authenticateToken, authorizeAdmin, async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ message: "Produto não encontrado" });

    await product.destroy();
    res.json({ message: "Produto removido com sucesso" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
