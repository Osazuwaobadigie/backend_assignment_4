const express = require("express");
const app = express();
const authorRoute = require("./authors.route");
const logger = require("./logger");



app.use(express.json());
app.use(logger)
app.use("/authors", authorRoute);


app.get("/", (req, res) => {
    res.send("Hello world");
});







app.listen(4000, () => {
    console.log("server is running on port 4000: Express.js");
});