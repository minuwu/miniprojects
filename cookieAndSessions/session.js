const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("connect-flash");
const ejs = require("ejs");

app.set("view engine", "ejs");

const sessionOptions = {
    secret: "supersecretpassphrase",
    resave: false,
    saveUninitialized: true
}
app.use(session(sessionOptions));
app.use(flash());
app.use("*", (req, res, next)=>{
    if(session.count){
        session.count++;
    }else{
        session.count=1;
    }
    console.log("response session count: ", session.count);
    next()
    // res.send("server working...");
})

app.get("/register", (req, res)=>{
    let { name = "anonoymous" } = req.query;
    req.session.name = name;
    req.flash("msg","user registered successfullly");
    res.redirect("/welcome");
})
app.get("/welcome", (req, res)=>{
    // console.log(req.flash("msg"));
    res.render("welcome.ejs",{name: req.session.name, msg: req.flash("msg")});
    res.send(`Hello ${req.session.name}`);
})

app.listen(3000, (req, res)=>{
    console.log("app running...");
})