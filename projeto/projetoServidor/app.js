// backend/app.js
const express = require("express");
const cors = require("cors");
const productRoutes = require("./routes/authProduct");
const orderRoutes = require("./routes/authOrder");
const authRoutes = require("./routes/authRole");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
