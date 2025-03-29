const mongoose = require('mongoose');

main ()
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));


async function main() { 
mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
});

const User = mongoose.model('User', userSchema);
// const Emoloyee = mongoose.model('Employee', userSchema);

// const user1 = new User({
//     name:"Mayur Patil",
//     age: 22,
//     email:"Mayur@gmail.com",
//     password:"mayur123"
// });

// const user2 = new User({
//     name:"Sidharth Patil",
//     age: 21,
//     email:"Sidharth@gmail.com",
//     password:"Sid123"
// });

// user2
// .save()
// .then(() => console.log(user2))
// .catch(err => console.log(err));


User.insertMany([
    {name:"Mayur Patil",
    age: 22,},
    {name:"Sidharth Patil", age: 21,},
    {name:"Dr Hiesenberg", age: 20,}, 
    {name:"homelander", age: 20,},
]).then((data)=>{
    console.log(data);
});