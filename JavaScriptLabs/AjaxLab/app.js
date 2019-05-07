const express = require("express");
const app = express();

app.listen(3000, function () {
    console.log("Server started");
});

app.get("/", function (request, response) {
    response.sendFile(__dirname + "/index.html");
});

app.get("/get_info", function (req, res) {
    console.log(req.query.info);
    res.send(req.query.info);
});