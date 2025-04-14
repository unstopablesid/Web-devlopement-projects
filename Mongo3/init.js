const mongoose = require("mongoose");
const chat = require('./models/chats');
main().then(() => {
    console.log('Connected to MongoDB');
}
).catch(err => {
    console.error('Error connecting to MongoDB:', err);
});

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/Whatsapp');
    console.log('Connected to MongoDB');
  }


let allchats= [{
      from: 'mayur',
      to : 'sachin',
      created_at: new Date(),
      msg: 'hello sachin'
  },
  {
      from: 'sachin',
      to : 'mayur',
      created_at: new Date(),
      msg: 'hello mayur'
  },
  {
      from: 'mayur',
      to : 'sachin',
      created_at: new Date(),
      msg: 'hello sachin'
  },
  {
      from: 'sachin',
      to : 'mayur',
      created_at: new Date(),
      msg: 'hello mayur'
  }
]
 

chat.insertMany(allchats);