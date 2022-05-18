const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const routes = require("./api/routes/routes");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
routes(app);

app.get("/*", (req, res) => {
    res.status(404)
    res.json({ response: "404 This URI doesn't exist" })
});
app.post("/*", (req, res) => {
    res.status(400);
    res.json({ response: "404 This URI doesn't exist" })
});

module.exports = app;

app.listen(3000, () => console.log("app listenning in 3000"));
