// backend/routes/orderRoutes.js
const express = require("express");
const { authenticateToken, authorizeAdmin } = require("../middleware/authMiddleware");
const Order = require("../models/Order");

const router = express.Router();

// Rota para criar um novo pedido (Apenas usuários autenticados)
router.post("/", authenticateToken, async (req, res) => {
  try {
    const order = await Order.create({ ...req.body, userId: req.user.id });
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Rota para visualizar todos os pedidos (Apenas administradores)
router.get("/", authenticateToken, authorizeAdmin, async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Rota para visualizar pedidos de um usuário específico
router.get("/my-orders", authenticateToken, async (req, res) => {
  try {
    const orders = await Order.findAll({ where: { userId: req.user.id } });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Rota para atualizar o status de um pedido (Apenas administradores)
router.put("/:id", authenticateToken, authorizeAdmin, async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) return res.status(404).json({ message: "Pedido não encontrado" });

    await order.update(req.body);
    res.json(order);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
