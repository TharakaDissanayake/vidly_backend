const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config({ path: "../config/.env" });
const genresAPI = require("./routes/genresAPI");
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/genres", genresAPI);

// Connect to MongoDB
mongoose
  .connect(process.env.CONNECTION_URI)
  .then(() => console.log("connected to the mongodb "))
  .catch((err) => console.error("coudnot connect to the mongo db " + err));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
