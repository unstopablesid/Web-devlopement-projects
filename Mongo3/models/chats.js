const mongoose = require("mongoose");


const chatSchema = new mongoose.Schema(
    {
        from : {
            type: String,
            required: true,
        },
        to : {
            type: String,
            required: true,
        },
        created_at : {
            type: Date,
            default: Date.now,
            required: true,
        },
        msg:{
            type: String,
            maxLength: 500,
        }
    }
)


const chat = mongoose.model("chat", chatSchema);
module.exports = chat;