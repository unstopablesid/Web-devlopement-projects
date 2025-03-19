const express = require('express');
const app = express();

let port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// app.use((req,res)=>{
//     console.log('Request received');
//     res.send({

//         name:"Mayur",
//         age:24,
//     });
// });

app.get('/', (req, res) => {

     res.send('ROOT');
});
app.get('/contact', (req, res) => {

     res.send('contact');
});
app.get('/Faq', (req, res) => {

     res.send('Faqs');
});
app.get("*", (req, res) => {

    res.send('This is 404 page');
});