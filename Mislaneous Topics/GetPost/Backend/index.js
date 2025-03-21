const express = require('express');
const app = express();
const port = 4000;

app.get('/register', (req, res) => {
    let {user , password} = req.query;
    res.send(`standard GET requset . Welcome ${user}!`);

});

app.post('/register', (req, res) => {   
res.send('Standard POST request');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});