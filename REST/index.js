const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

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
        username: "Mayur",
        content: "I love coding",
    },
    {
        username: "Shradha",
        content: "I an motherfucking millionire",
    },
    {
        username: "Homelander",
        content: "I can do whatever I want",
    },
    {
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