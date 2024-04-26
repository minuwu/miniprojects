const express = require("express");
const app = express();
const PORT = 8080;
const ExpressError = require("./expressError.js");

//custom middle ware 
app.use((req,res,next)=>{
    console.log("1st middleware");
    next();
})
//custom middle ware 
app.use((req,res,next)=>{
    console.log("2nd middleware");
    return next();
    console.log("Shouldn't be here");
})
// logger middleware
app.use((req,res,next)=>{
    req.responseTime = new Date(Date.now()).toString();
    console.log(req.method, req.path, req.responseTime, req.hostname);
    next();
})
// authentication layer
// http://localhost:8080/api?token=giveaccess
app.use("/api",(req,res,next)=>{
    let {token} = req.query;
    if(token === "giveaccess"){
        next();
    }else{
        // res.send("access denied");
        // throw new Error("access denied");
        throw new ExpressError(401,"Access Denied"); //uses custom error class
    }
})
app.get("/api",(req,res)=>{
    res.send("DATA");
})
//passing multiple middlewares : same block as above, different approach
const auth = (req,res,next)=>{
    let {token} = req.query;
    if(token === "giveaccess"){
        next();
    }else{
        res.send("access denied");
    }
}
app.get("/api",auth, (req,res)=>{
    res.send("DATA");
})
//end of block

app.get("/",(req,res)=>{
    res.send("This is root");
})
app.get("/random",(req,res)=>{
    res.send("This is random");
})
app.get("/admin", (req,res)=>{
    throw new ExpressError(403,"Access is Forbidden");
})
//custom middle ware 
app.use((req,res)=>{
    console.log("4th middleware");
    res.status(404).send("PAGE NOT FOUND \n Response from middleware");
})

//error handling middlewares
app.get("/err",(req,res)=>{
    abcd = abcd; //an error
});
app.use((err, req, res, next)=>{
    console.log("Error Handler 1");
    next(err); //passes to next err handler
});
app.use((err, req, res, next)=>{
    console.log("Error Handler 2");
    res.send(err); //will send the custom error instead of default express error
    let {status = 500, message = "some error occured"} = err; //if expressError was not defined
    res.status(status).send(message);
    next(err); //passes to default err handler as there's no next custom error handler
});
//end of block

app.listen(PORT,(req,res)=>{
    console.log("Express: Listening on port: ",PORT);
})