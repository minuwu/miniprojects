const mongoose = require("mongoose");
const {Schema} = mongoose;
const MONGO_URL = "mongodb://127.0.0.1:27017/DBrelation"

main()
    .then(res => console.log("Mongoose: Connection Successful: ", res))
    .catch(err => console.log("Mongoose: Connection Failed: ", err));
async function main() {
  await mongoose.connect(MONGO_URL);
}

const orderSchema = new Schema({
  name: String,
  price: Number
});
const Order = mongoose.model("Order", orderSchema);

const customerSchema = new Schema({
  name: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order"
    }
  ]
});
const Customer = mongoose.model("Customer", customerSchema);

const orderData = [
  {
    name: "Samosa",
    price: 8
  },
  {
    name: "Chips",
    price: 20
  },
  {
    name: "Chocolate",
    price: 100
  }
];

const fun1 = async ()=>{
  let result = await Order.insertMany(orderData);
  console.log("*******************");
  console.log(result);
    
  // fun2();
};



const fun2 = async ()=> {
  const order1 = await Order.findOne({ "name": "Samosa" });
  const order2 = await Order.findOne({ "name": "Chocolate" });
  const customer1 = new Customer({
    name: "minhaz",
    orders: [
      order1, order2
    ]
  });
  // console.log(order1);
  // customer1.orders.push(order1);
  // customer1.orders.push(order2);
  let result = await customer1.save();
  console.log("*******************");
  console.log(result);
};

(async ()=>{
  await fun1();
  await fun2();
})()

// fun1();
// fun2();