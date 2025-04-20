const express = require('express');

const app = express();


app.use( (req, res,next) => {

let {token} = req.query;
if(token === "giveaccess"){
    console.log("Access granted")
    next()
}
res.send("Access denied");
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