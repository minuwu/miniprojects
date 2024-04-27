const express = require("express");
const app = express();
const ejs = require("ejs");
const ejsMate = require("ejs-mate");

app.set("view engine", "ejs");
app.engine("ejs", ejsMate);


app.get("/listings", (req,res)=>{
    res.render("pages/index.ejs");
})


app.listen(8080,(req,res)=>{
    console.log("app listening ...");
})