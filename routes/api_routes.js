const router = require("express").Router();
const Book = require("../book.js");

router.get("/books", (req, res) => {
    Book.find({})
    .then(dbModel => res.json(dbModel))
});

router.post("/books", (req, res) => {
    Book.create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
})

router.delete("/books/:id", (req, res) => {
    Book.findById({ _id: req.params.id })
    .then(dbModel => dbModel.remove())
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
})

module.exports = router;