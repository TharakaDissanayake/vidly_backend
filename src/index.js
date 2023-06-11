const express = require("express");
require("dotenv").config({ path: "../config/.env" });
const genresAPI = require("./routes/genresAPI");
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/genres", genresAPI);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
