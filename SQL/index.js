const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const methodOverride = require('method-override');

const app = express();
const path = require("path");
const { count } = require('console');
const port = 3000;

app.set('view engine', 'ejs');
app.set("views" , path.join(__dirname, "/views"));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
  let q = `SELECT count(*) FROM user`;
  try{
      connection.query(q , (err, results) => {
        if (err) throw err;
        console.log(results[0]["count(*)"]);
        res.render("home.ejs",{ count } );
    });
    } catch(err) {
      console.log(err);
      res.render("There is somethiong wrong");
    }
    
});
// homepage
app.get('/user', (req, res) => {
    let q = `SELECT * FROM user`;
    try{
        connection.query(q , (err, users) => {
          if (err) throw err;
          res.render("user.ejs",{ users} );
      });
      } catch(err) {
        console.log(err);
        res.render("There is somethiong wrong");
      }

});

app.get('/user/:id/edit', (req, res) => {
 let id = req.params.id;
 let q = `SELECT * FROM user WHERE id = '${id}'`;
 try{
    connection.query(q , (err, user) => {
      if (err) throw err;
      res.render("edit.ejs",{ user: user[0] } );
  });
  } catch(err) {
    console.log(err);
    res.render("There is somethiong wrong");
  }
 
});

app.patch('/user/:id', (req, res) => {
  let {id} = req.params;
  let {password:fromPass , username:newUsername} = req.body;
  let q = `SELECT * FROM user WHERE id = '${id}'`;
  try{
     connection.query(q , (err, result) => {
       if (err) throw err;
       let user = result[0];
       if(fromPass != user.password){
      res.send("Password is incorrect");
      return;
       } else{
        let q2 = `UPDATE user SET username = '${newUsername}' WHERE id = '${id}'`;
        connection.query(q2 , (err, result) => {
          if (err) throw err;
          res.redirect("/user");});
       }
      
       

   });
   } catch(err) {
     console.log(err);
     res.render("There is somethiong wrong");
   }
  
});

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'sigma_app',
  password: 'MRsidharth@2004'
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(), 
    faker.internet.email(),
    faker.internet.password(),
  ];
}


// let q = "INSERT INTO user (id, username, email, password) VALUES ?";
// let data = [];

// for (let i = 0; i < 100; i++) {
//   data.push(getRandomUser());
// }


// try{
//   connection.query(q , [data] , (err, results) => {
//     if (err) throw err;
//     console.log(results);
// });
// } catch(err) {
//   console.log(err);
// }

// connection.end();