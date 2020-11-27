const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// bring routes
 const productRoutes = require("./routes/productRoute");
 const optionRoutes = require("./routes/optionRoute");


// app
const app = express();


// db
if(process.env.NODE_ENV === "development"){
  var mongoLink = process.env.MONGO_URL;

}else{
  var mongoLink = "mongodb+srv://xero:" + process.env.MONGOPASS + "@cluster0.sq1pu.mongodb.net/xero?retryWrites=true&w=majority";

}


if (process.env.NODE_ENV === 'test') {
  const Mockgoose = require('mockgoose').Mockgoose;
  const mockgoose = new Mockgoose(mongoose);
  console.log("test");
  mockgoose.prepareStorage()
    .then(() => {
      mongoose.connect(process.env.MONGO_URL,
        { useNewUrlParser: true, useCreateIndex: true })
        .then(() => console.log("DB connected"))
        .catch((err) => {
          console.log(err);
        });
    })
} else {
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
}


// middlewares
if(process.env.NODE_ENV === 'production'){
    app.use(morgan("combined"));
} 
else if(process.env.NODE_ENV === 'development'){
    app.use(morgan("dev"))
}

app.use(bodyParser.json());

// routes middleware
 app.use("/api", productRoutes);
 app.use("/api", optionRoutes);




module.exports = app;





