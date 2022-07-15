const pizzaDroplet = require("../../database/Models");

export default function handler(req, res) {
    const addpizza = pizzaDroplet({title : "Corn", price : 250, desc : "corn pizza with cheese", veg : true});
    addpizza.save((err) => {
        console.log(err);
    })
    res.status(200).json({ name: 'John Doe' })
  }
  