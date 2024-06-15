const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(cookieParser("secretkeypassphrase"));

app.get("/", (req, res)=>{
    console.log("cookie: ", req.cookies);
    console.log("signed cookie: ", req.signedCookies);
    res.cookie("cookieNo","one");
    res.cookie("secretCookie","passphrase", {signed: true});
    res.send("server running...");
})

app.listen(3000, (req, res)=>{
    console.log("app running...");
})