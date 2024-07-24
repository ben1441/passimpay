const express = require("express");
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser());

app.get("/", (req, res) => {
  res.send({ hello: "world" });
});

app.post("/notifications", (req, res) => {
  console.log(req.body);
  res.send("ok");
});

app.post("/successful", (req, res) => {
  console.log(req.body);
  res.send("ok");
});

app.post("/failed", (req, res) => {
  console.log(req.body);
  res.send("ok");
});

app.listen(80, () => {
  console.log("Listening on port 80");
});
