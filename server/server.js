const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
// connect to DB
connectDB();
const app = express();
//middleware
app.use(cors());
app.use(express.json());

//routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

const dashboardRoute = require("./routes/dashboard");
app.use("/api/dashboard", dashboardRoute);

const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running Port ${PORT}`);
});
