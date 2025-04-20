const express = require('express');

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res) =>{
    res.send('Home page')
});

app.get('/err',(req,res) =>{
    abcd = 34;
});

//custom error handler
app.use((err,req,res,next) =>{
console.log("____________Error_____________");
next(err);
});



app.listen(7000,() =>{
    console.log('Server is running on port 7000')
})