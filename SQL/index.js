
const { faker }   = require('@faker-js/faker');
const mysql = require('mysql2');


let q = "insert into temp (id INT , username , email, password ) values ?";

let getRandomUser =() =>{
  return [
    faker.string.uuid(),
    faker.internet.username(), 
    faker.internet.email(),
    faker.internet.password(),
  ];
}

let data = [];
for (let i = 0; i < 100; i++) {
    data.push(getRandomUser());
    // console.log(getRandomUser());
} 
// Create a connection to the database

  const connection =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'sigma_app',
    password: 'MRsidharth@2004'
  });


  try{
  connection.query(q ,[data], (err, results) => {
    if (err) throw err;
      console.error(results);
  });}
    catch(err){
        console.log(err);
    }
   connection.end();