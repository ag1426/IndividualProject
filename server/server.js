const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");



const User = require("./models/user")

dotenv.config();

const app = express();

mongoose.connect(
  process.env.DATABASE, 
  { useNewUrlParser: true, useUnifiedTopology: true  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to the database");
    }
  }
);

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// require api

const productRoutes = require('./routes/product');
const userRoutes = require("./routes/auth");
const addressRoutes = require("./routes/address");
const paymentRoutes = require("./routes/payment");
const orderRoutes = require("./routes/order");
const searchRoutes = require("./routes/search");




app.use('/api', productRoutes);
app.use('/api', userRoutes);
app.use("/api", addressRoutes);
app.use("/api", paymentRoutes);
app.use("/api", orderRoutes);
app.use("/api", searchRoutes);



app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Listening on port", 3000);
  }
});
