const mongoose = require("mongoose");
const Book = require("../book.js");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

const bookSeed = [
  {
    title: "Hello World",
    authors: ["admin"],
    description:
      "Welcome to your first post!asdf To create posts create a title and body. Don't forget to include your screen name!",
    link: "safs"
  },
  {
    title: "Hello Worasdfld",
    authors: ["admiasdfn"],
    description:
      "Welcome to your first poasdfst! To create posts create a title and body. Don't forget to include your screen name!",
      link: "safasdfs"
  },
  {
    title: "Hello Wasdforld",
    authors: ["admasdfin"],
    description:
      "Welcome to your asdffirst post! To create posts create a title and body. Don't forget to include your screen name!",
      link: "safasdssfs"
  }
];

Book.remove({})
  .then(() => Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
