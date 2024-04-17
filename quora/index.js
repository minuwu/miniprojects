const express = require('express');
const app = express();
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({    extended: true  }));
app.use(express.json());

let posts = [
    {
        id:uuidv4(),
        userName: "minhaz",
        postContent: "lorem impuslorem impuslorem impuslorem impuslorem impuslorem impuslorem impuslorem impuslorem impuslorem impuslorem impuslorem impus"
    },
    {
        id:uuidv4(),
        userName: "abdullah",
        postContent: "lorem impuslorem lorem impuslorem lorem impuslorem lorem impuslorem lorem impuslorem lorem impuslorem lorem impuslorem lorem impuslorem lorem impuslorem lorem impuslorem lorem impuslorem impuslorem impuslorem impuslorem impuslorem impuslorem impuslorem impuslorem impuslorem impuslorem impuslorem impus"
    },
    {
        id:uuidv4(),
        userName: "rakin",
        postContent: "lorem impuslorem impuslorem impuslorem impuslorem impuslorem impuslorem impuslorem impuslorem impuslorem impuslorem impuslorem impus"
    },
    {
        id:uuidv4(),
        userName: "laura",
        postContent: "lorem impuslorem impuslorem impuslorem impuslorem impuslorem impuslorem impuslorem impuslorem impuslorem impuslorem impuslorem impus"
    }
];



app.get("/posts",(req,res)=>{
    res.render("posts.ejs",{ posts });
});


app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})

app.get("/posts/:id",(req,res)=>{
    let { id }  = req.params;
    let post = posts.find((post)=>{return post.id==id});
    // res.send(`${post.postContent}`);
    res.render("post.ejs", {post});
})

app.post("/posts",(req,res)=>{
    let id = uuidv4();
    console.dir(req.body);
    let {userName, postContent} = req.body;
    posts.push({id, userName, postContent});
    res.redirect("/posts");
})

app.listen(port,(req,res)=>{
    console.log(`app listening on ${port}`);
})