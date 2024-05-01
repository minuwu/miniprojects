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

//middleware for fun4 
// there's is mongoose middleware for findByIdAndDelete, but this uses findOneAndDelete as middleware
// so we setup a middleware for findOneAndDelete to process cascading deletion
customerSchema.pre("findOneAndDelete",async (data)=>{
  console.log("Pre-middleware****************");
  console.log(data);
  // next();
})
customerSchema.post("findOneAndDelete", async(customer)=>{
  if(customer){
    if(customer.orders){
      console.log(customer.orders)
      if(customer.orders.length){
        let result = await Order.deleteMany({ _id: {$in: customer.orders }});
        console.log("Post-middleware****************");
        console.log(result);
        // next();
      }
    }
  }
  // next();
})
//middle must be defined before compiling models
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
  await Order.deleteMany({});
  let result = await Order.insertMany(orderData);
  console.log("fun1*******************");
  console.log(result);
    
  // fun2();
};



const fun2 = async ()=> {
  await Customer.deleteMany({});
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
  console.log("fun2*******************");
  console.log(result);
};

const fun3 = async () => {
  const result  = await Customer.findOne().populate("orders");
  console.log("fun3*******************");
  console.log(result);
}

const fun4 = async () =>{
  // const result = await Customer.findByIdAndDelete("663257ae512bece2fcf8ac68");
  const result = await Customer.findOneAndDelete();
  console.log("fun4*******************");
  console.log(result);
}



(async ()=>{
  await fun1();         //creates order
  await fun2();         //creates customer
  await fun3();         //shows customer with detailed orders
  await fun4();         //deletes customer - triggers cascading deletion - mongoose middleware deletes orders
  await fun3();         //shows customer with detailed orders
  let result = await Order.find();
  console.log("############");
  console.log(result);
})()

// fun1();
// fun2();