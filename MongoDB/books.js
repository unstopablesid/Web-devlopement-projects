const mongoose = require('mongoose');

main ()
.then(()=> console.log('MongoDB connected'))
.catch(err => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/amezon");
}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },

});

const Book = mongoose.model('Book', bookSchema);    

let book1 = new Book({  
    title : "The winner stands alone",
    author : "Mayur",
    price : 1000,
});
let book2 = new Book({
    title : "The Boys",
    author : "Mayur",
    price : 1000,
});


book2.save()
.then(()=> console.log(book2))  
.catch(err => console.log(err));
