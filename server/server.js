const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
// bring routes
 const productRoutes = require("./routes/productRoute");
 const optionRoutes = require("./routes/optionRoute");


// app
const app = express();


// db
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: false,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => {
    console.log(err);
  });

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
// cors
if (process.env.NODE_ENV === "development") {
  app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
}
// routes middleware
 app.use("/api", productRoutes);
 app.use("/api", optionRoutes);


// port
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
