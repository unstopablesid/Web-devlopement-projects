
const { faker }   = require('@faker-js/faker');
const mysql = require('mysql2');

 let getRandomUser =() =>{
    return {
      Id: faker.string.uuid(),
      username: faker.internet.username(), 
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
  }

// Create a connection to the database

  const connection =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'sigma_app',
    password: 'MRsidharth@2004'
  });
try{
  connection.query("SHOW TABLES" , (err, results) => {
    if (err) {
      console.error(err);
    }

    console.log(results);
  });}
    catch(err){
        console.log(err);
    }
   connection.end();