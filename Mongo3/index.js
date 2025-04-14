const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const chat = require('./models/chats');

// app.use("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");  

main().then(() => {
    console.log('Connected to MongoDB');
}
).catch(err => {
    console.error('Error connecting to MongoDB:', err);
});

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/Whatsapp');
  }

app.get("/chats", async (req, res) => {
    let Chat = await chat.find();
   res.render("index.ejs", { Chat });
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});




app.get('/', (req, res) => {
    res.send('Hello World!');
});