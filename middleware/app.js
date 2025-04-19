const express = require('express');

const app = express();


app.use( (req, res,next) => {
req.time = Date.now();
console.log(req.method, req.url, req.time);
next();
});

app.get('/', (req, res) => {
  console.log('Middleware 2')
  res.send('Hello from Middleware 2')
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});