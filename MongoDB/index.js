const mongoose = require('mongoose');

main ()
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));


async function main() { 
mongoose.connect('mongodb://127.0.0.1:27017/test');
}

