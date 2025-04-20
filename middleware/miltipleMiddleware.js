const express = require('express');

const app = express();


const checkToken =  (req, res,next) => {

let {token} = req.query;
if(token === "giveaccess"){
    console.log("Access granted")
    next()
}
res.send("Access denied");
}

app.get("/api", checkToken, (req, res) => {
  res.send(" API Data");
});

app.get('/',checkToken, (req, res) => {
  res.send('Home Page');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});