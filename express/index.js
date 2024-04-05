import express from "express";
// import * as path from "path";
const app = express();
const port = 3000;

import * as data from "./data.js";
import { error } from "console";
// console.dir(data);


import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


console.log(__dirname);
console.log(__filename);

app.set("view engine", "ejs");
// app.set("view", path.join(__dirname, "./views"));
app.get("/", (req,res)=>{
    res.render("home");
})

const drinks = data.data.drinks;
// console.log();
// for( let i in drinks){
//     console.log(drinks[i]);
// }
// console.log(drinks);

// let arr = [2,4,5,6,7,8,8,8,1];
// console.log(arr);

app.get("/drinks", (req,res)=>{
    if(error){
        console.log(error);
    }
    res.render("instagram", {drinks} );
})

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
app.get("/*", (req,res)=>{
    console.log("wildcard entry");
    res.send("visit a valid route");
})
app.listen(port,(err)=>{
    if(err){
        console.log("something went wrong...");
    }
    console.log("listening on port ",port);
})
