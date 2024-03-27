const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello world");
});

router.post("/", (req, res) => {
    res.send("post authors");
});

router.put("/", (req, res) => {
    res.send("put authors");
});

router.delete("/", (req, res) => {
    res.send("delete authors");
});



module.exports = router;