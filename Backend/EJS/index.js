const express = require('express');
const app = express();
const Path = require('path');

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.set ('views', Path.join(__dirname, 'views'));

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render("home.ejs")
});