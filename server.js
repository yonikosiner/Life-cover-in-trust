const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.get("/contact", (req, res) => {
  res.send("Contact");
});

app.use(bodyParser.urlencoded({ extended: false }));
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.post("/contact", urlencodedParser, function (req, res) {
  console.log(req.body.name);
  console.log(req.body.email);
  console.log(req.body.message);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
