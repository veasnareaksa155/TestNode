const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

// import routes
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");


// use routes
app.use("/users", userRoutes);

app.use('/products',productRoutes);


// start server

app.listen(3000, () => {
  console.log("Server running on port 3000");
});