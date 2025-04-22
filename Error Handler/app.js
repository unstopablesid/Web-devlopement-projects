const express = require('express');
const app = express();
const ExpressError = require('./ExpressError');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get('/',(req,res) =>{
//     res.send('Home page')
// });

// app.get('/err',(req,res) =>{
//     abcd = 34;
// });

// //custom error handler
// app.use((err,req,res,next) =>{
// console.log("____________Error_____________");
// next(err);
// });



// app.listen(7000,() =>{
//     console.log('Server is running on port 7000')
// })
    app.use( (req, res,next) => {

    let {token} = req.query;
    if(token === "giveaccess"){
        console.log("Access granted")
        next()
    }
    throw new ExpressError(401,"Access denied")
    });
    
    app.get("/api", (req, res) => {
      res.send(" API Data");
    });
    
    app.get('/', (req, res) => {
      res.send('Home Page');
    });
    
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });