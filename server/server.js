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
var mongoLink = process.env.MONGO_URL
if(!process.env.MONGOPASS){
  mongoLink = "mongodb+srv://xero:" + process.env.MONGOPASS + "@cluster0.sq1pu.mongodb.net/xero?retryWrites=true&w=majority";

}


mongoose
  .connect(mongoLink, {
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

// routes middleware
 app.use("/api", productRoutes);
 app.use("/api", optionRoutes);


// port
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
