const pizzaDroplet = require("../../database/Models");
import connectToDB from "../../database/Connection";

const handler = async (req, res) =>  {
  const allpizzas = await pizzaDroplet.find();
  res.status(200).json(allpizzas)

  
}

export default connectToDB(handler)
