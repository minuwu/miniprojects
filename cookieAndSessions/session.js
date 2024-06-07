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
app.use((req,res,next)=>{
    res.locals.success = req.flash("successMsg");
    res.locals.error = req.flash("errorMsg");
    next();
})

app.get("/register", (req, res)=>{
    let { name = "anonymous" } = req.query;
    req.session.name = name;
    if(name=="anonymous"){
        req.flash("errorMsg","User couldn't be registered");
    }else{
        req.flash("successMsg","User registerd successfully");
    }
    res.redirect("/welcome");
})
app.get("/welcome", (req, res)=>{
    // console.log(req.flash("msg"));
    res.render("welcome.ejs",{name: req.session.name});
    res.send(`Hello ${req.session.name}`);
})

app.listen(3000, (req, res)=>{
    console.log("app running...");
})