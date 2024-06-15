const express = require("express");
const app = express();
const userRoute = require("./routes/user.js");
const postRoute = require("./routes/post.js");

app.get("/",(req,res)=>{
    res.send("root");
})

app.use("/user",userRoute);
app.use("/post",postRoute);


app.listen(3000,(req,res)=>{
    console.log("app listening");
})

// ###
// GET http://localhost:3000/post/a;jeoiinf