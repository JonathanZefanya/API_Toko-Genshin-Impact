const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const productsRoute = require("./routes/products");
const bannersRoute = require("./routes/banners");
const categoriesRoute = require("./routes/categories");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/products", productsRoute);
app.use("/banners", bannersRoute);
app.use("/categories", categoriesRoute);

// Server
const PORT = 9999;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
