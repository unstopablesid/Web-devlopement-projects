const express = require('express');
const app = express();
const Path = require('path');

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



app.get('/rolldice', (req, res) => {
    res.render("rolldice.ejs");
});
app.get('/', (req, res) => {
    res.render("home.ejs");
});


app.get('/instagram/:username', (req, res) => {
    let {username} = req.params;
    const instaData = require('./data.json');
    const data = instaData[username];
    res.render("instagram.ejs",{data});
});