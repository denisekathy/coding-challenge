const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storeSchema = new Schema(
  {

    listone: {
         type: String,
         enum: [
            "Shoes",
            "Pants",
            "Groceries",
            "Ipad",
            "Candles",
         ],

     required: true },

     listtwo: {
        type: String,
        enum: [
           "Fishing Gear",
           "Basketball",
           "Pet Supplies",
           "Toys",
           "Body Wash",
        ],

    required: true },

    store: { type: String, 
        enum:[
            "Walmart",
            "Target",

    ],
         required: true },
   
  }
 
);

module.exports = mongoose.model("Store", storeSchema);