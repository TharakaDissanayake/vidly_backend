const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config({ path: "../config/.env" });
const app = express();
const port = process.env.PORT || 8000;

mongoose
  .connect(process.env.CONNECTION_URI)
  .then(() => console.log("connected to the mongodb "))
  .catch((err) => console.error("coudnot connect to the mongo db " + err));

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
