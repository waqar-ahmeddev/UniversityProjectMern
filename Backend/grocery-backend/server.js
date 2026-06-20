require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Database connect karo
connectDB();

// Routes
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("🛒 Grocery Backend API chal rahi hai!");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server http://localhost:${PORT} par chal raha hai`);
});
