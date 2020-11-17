const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

const bookSchema = new Schema({
    title:{
        type: String,
        require: true
    },
    authors:[
        {
            type: String,
            require: true
        }
    ],
    description:{
        type: String,
        require: true
    },
    image:{
        type: String,
        default: "",
    },
    link:{
        type: String,
        default: "",
    }
})

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;