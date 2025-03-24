const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const { v4 : uuidv4 } = require('uuid');
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set("views engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));



app.listen(port,(req,res)=>{
    console.log('Server is running on port 3000');
});

let posts = [
    {
        id: uuidv4(),
        username: "Mayur",
        content: "I love coding",
    },
    {
        id: uuidv4(),
        username: "Shradha",
        content: "I am a motherfucking millionaire",
    },
    {
        id: uuidv4(),
        username: "Homelander",
        content: "I can do whatever I want",
    },
    {
        id: uuidv4(),
        username: "Arpit",
        content: "I am going live today at 11:00 PM",
    }
];
app.get('/',(req , res) => {
    res.send('Hello World!');
});

//post route to create a new post
app.get('/posts',(req , res) => {
    res.render('index.ejs',{posts:posts});
}); 
//this renders a new route
app.get('/posts/new',(req,res)=>{
res.render('new.ejs');
});
//this creates a new post
app.post('/posts',(req,res)=>{
    let {username,content} = req.body;
    let id = uuidv4();
    posts.push({id,username,content});
    res.redirect('/posts');
});

app.get('/posts/:id',(req,res)=>{
    let {id} = req.params.id;
    let post = posts.find((p) => p.username === id);
    res.render('show.ejs',{post:posts[id]});
});