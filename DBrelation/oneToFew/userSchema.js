const mongoose = require("mongoose");
const MONGO_URL = "mongodb://127.0.0.1:27017/DBrelation"

main()
    .then(res => console.log("Mongoose: Connection Successful: ", res))
    .catch(err => console.log("Mongoose: Connection Failed: ", err));
async function main() {
  await mongoose.connect(MONGO_URL);
}

const userSchema = mongoose.Schema({
    user: String,
    location: [
        {
            _id: false,//disables the automate object id
            city: String,
            country: String
        }
    ]
});

const User = mongoose.model("user", userSchema);

const insertUser = async() => {
    const user1 = new User({
        user: "minhazul abedin",
        location:[
            { 
                city: "Chattogram",
                country: "Bangladesh"
            }
        ]
    });
    user1.location.push(
        {
            city: "rangamati",
            country: "Bamngladesh"
        }
    )
    let result = await user1.save();
    console.log(result);
}

insertUser();