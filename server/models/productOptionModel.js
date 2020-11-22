const mongoose = require("mongoose");
const { v4: uuidv4 } = require('uuid');

const productOptionSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      default: function genUUID() {
        return uuidv4();
      }
    },  
    productId: {
        type: String,
        default:uuidv4(),
        required: true,
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
    }

  }
);
productOptionSchema.methods.publicFields =  function(){
    let returnObject = {
        name:this.name,
        description: this.description,
        id: this.id
    }
    return returnObject;
}


module.exports = mongoose.model("ProductOption", productOptionSchema);
