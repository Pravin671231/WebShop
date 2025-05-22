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
app.get("/", (req, res) => {
  res.send("API running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running Port ${PORT}`);
});
