const mongoose = require("mongoose");
const { v4: uuidv4 } = require('uuid');

const productSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      default: function genUUID() {
        return uuidv4();
      }
    },  
    name: {
        type: String,
        trim: true,
        required: true,
      },
    description: {
      type: String,
      trim: true,
      min: 3,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },

    deliveryPrice: {
      type: Number,
      required: true,
    },



  }
);

productSchema.methods.publicFields =  function(){
  let returnObject = {
      id: this.id,
      name:this.name,
      description: this.description,
      price: this.price,
      deliveryPrice: this.deliveryPrice

  }
  return returnObject;
}

module.exports = mongoose.model("Product", productSchema);
