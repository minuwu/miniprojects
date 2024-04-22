const mongoose = require('mongoose');

main()
.then(res => console.log("Mongoose: Connection Successful: ", res))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        default: "pagla@mail"
    },
    password: String
});

const User = mongoose.model("User",userSchema);

// const user1 = new User({
//     name: "minhaz",
//     email: "emai@google",
//     password: "khidalagse"
// })

// user1.save()
// .then(res=>console.log("user1: insert: successful: ",res))
// .catch(err=>console.log("user1: insert: failed: ",err));

// User.insertMany([
//     {
//         name: "mizba",
//         email: "emai@google",
//         password: "khidalagse"
//     },
//     {
//         name: "mifta",
//         email: "emai@google",
//         password: "khidalagse"

//     },
//     {
//         name: "toBe",
//         email: "junk@bd.com",
//         password: "j9tgojh"
//     }
// ])
// .then(res=>console.log("User: insertMany: successful: ",res))
// .catch(err=>console.log("User: insertMany: failed: ",err));

User.find()
.then(res=>console.log("User: FindALL: successful: ",res))
.catch(err=>console.log("User: FindALL: failed: ",err));

// User.findOneAndUpdate( {name:"mifta"}, {email:"yahood@com"}, {new:true})
// .then(res=>console.log("User: Update: successful: ",res))
// .catch(err=>console.log("User: Update: failed: ",err));

// User.deleteOne({name:"toBe"})
// .then(res=>console.log("User: DeleteOne: successful: ",res))
// .catch(err=>console.log("User: DeleteOne: failed: ",err));