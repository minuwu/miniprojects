import express from "express";
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/",(req,res)=>{
    console.log("visited root ", new Date);
    res.send("request recieved");
})
app.get("/search/:name/:id", (req,res)=>{
    let {name, id} = req.params;
    console.log(req.params);
    res.send(`Hello ${name} your ID is: ${id}`);
})
app.get("/search",(req,res)=>{
    console.log(req.query);
    let obj = req.query;
    res.send(`Query for ${obj}`);
})
app.get("*", (req,req)=>{
    console.log("wildcard entry");
    res.send("visit a valid route");
})
app.listen(port,(err)=>{
    if(err){
        console.log("something went wrong...");
    }
    console.log("listening on port ",port);
})
