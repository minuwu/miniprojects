import app from "express";
const app = express();
const port = 3000;
app.listen(port,(err)=>{
    if(err){
        console.log("something went wrong...");
    }
    console.log("listening on port ",port);
})