const mongoose = require("mongoose");
const {Schema} = mongoose;
const MONGO_URL = "mongodb://127.0.0.1:27017/DBrelation"

main()
    .then(res => console.log("Mongoose: Connection Successful: ", res))
    .catch(err => console.log("Mongoose: Connection Failed: ", err));
async function main() {
  await mongoose.connect(MONGO_URL);
}

const userSchema = new Schema({
  user: String,
  email: String
});
const postSchema = new Schema({
  content: String,
  likes: Number,
  user: {
    type:  Schema.Types.ObjectId,
    ref: "User"
  }
})
const User = mongoose.model("User",userSchema);
const Post = mongoose.model("Post",postSchema);

const fun1 = async () =>{
  await User.deleteMany();
  await Post.deleteMany();
  
  const user1 = new User({
    user: "minhazul abedin",
    email: "somerandom@email"
  });
  await user1.save();
  const post1 = new Post({
    content: "First post of the site",
    like: 3,
    user: user1
  });
  await post1.save();
  const post2 = new Post({
    content: "second post of the site",
    like: 55
  });
  post2.user = user1;
  await post2.save();
 
  console.log("*******************");
  let result = await Post.find();
  console.log(result);
  console.log("*******************");
  result = await  Post.findOne().populate("user");
  console.log(result);
  console.log("*******************");
  result = await  Post.findOne({}).populate("user","email");
  console.log(result);
  console.log("*******************");
  

}



fun1();