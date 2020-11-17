const router = require("express").Router();
const db = require("../models");

router.get("/books", (req, res) => {

    db.Book.find({
        title: { $regex: new RegExp(req.query.q, "i")}
    }
    )
});

router.post("/books", (req, res) => {
    db.Book.cre
})



module.exports = router;