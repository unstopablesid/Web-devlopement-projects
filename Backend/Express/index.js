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
// app.get("*", (req, res) => {

//     res.send('This page not available');
// });


app.get('/:User/:id', (req, res) => {
     console.log(req.params);
     let {User ,id} = req.params;
     let code = `<h1>User is ${User} and id is ${id}</h1>`;
     res.send(code);
     // res.send("User is "+User+" and id is "+id);
});

app.get('/Search', (req, res) => {
     console.log(req.query);
     let {query} = req.query;
     res.send("Search result for "+q);
});