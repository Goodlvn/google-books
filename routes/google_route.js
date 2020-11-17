const router = require("express").Router();
const axios = require("axios");

router.get("/google", (req, res) => {
    console.log("test");
    // const query = req.query.title;
    const query = "hunger games";
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
    .then(({ data }) => {
        console.log(data);
        res.json(data);
    });
})


module.exports = router;