import mongoose from 'mongoose';
const { Schema } = mongoose;

const pizzaSchema = new Schema({
  title:  String, // String is shorthand for {type: String}
  price : Number,
  desc : String,
  veg : Boolean
});

module.exports = pizzaSchema;