const express = require('express');
const app = express();
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({    extended: true  }));
app.use(express.json());
app.use(methodOverride("_method"));

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

app.get("/posts/:id/edit", (req,res)=>{
    let { id }  = req.params;
    let post = posts.find((post)=>{return post.id==id});
    res.render("edit.ejs",{post});
})

app.get("/posts/:id",(req,res)=>{
    let { id }  = req.params;
    let post = posts.find((post)=>{return post.id==id});
    res.render("post.ejs", {post});
})

app.patch("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((post)=>{return post.id==id});
    post.postContent = req.body.postContent;
    console.log(post.postContent);
    res.redirect("/posts");
})

app.get("/posts/:id/delete",(req,res)=>{
    let {id} = req.params;
    posts = posts.filter((post)=>{return post.id!=id});
    res.redirect("/posts");
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