import mongoose from "mongoose";
const pizzaSchema = require('./Schemas')
import ConnectToDB from "./Connection";

ConnectToDB();
const pizzaDroplet = mongoose.model('pijas', pizzaSchema);
mongoose.models = {}

module.exports = pizzaDroplet;