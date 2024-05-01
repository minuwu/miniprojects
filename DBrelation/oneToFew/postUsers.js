const mongoose = require("mongoose");
const {Schema} = mongoose;
const MONGO_URL = "mongodb://127.0.0.1:27017/DBrelation"

main()
    .then(res => console.log("Mongoose: Connection Successful: ", res))
    .catch(err => console.log("Mongoose: Connection Failed: ", err));
async function main() {
  await mongoose.connect(MONGO_URL);
}
