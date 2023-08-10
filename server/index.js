const express = require("express");
const dotenv = require("dotenv");
const app = express();
const mongoose = require("mongoose");
//
const productRoute = require("./routes/products.route");
const authRoute = require("./routes/auth.route");
const userRoute = require("./routes/users.route");
const ordersRoute = require("./routes/orders.route");
const cartRoute = require("./routes/cart.route");

const PORT = process.env.PORT || 4000;

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connected"))
  .catch((error) => console.log(error));

//
app.use(
  express.json({
    limit: "10mb",
  })
);
app.use(
  express.urlencoded({
    limit: "10mb",
    extended: true,
  })
);
app.use("/api/products", productRoute);
app.use("/api", authRoute);
app.use("/api/users", userRoute);
app.use("/api/orders", ordersRoute);
app.use("/api/cart", cartRoute);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
