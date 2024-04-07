const express = require("express");

const app = express();

const port = 3000;

app.set("port", port);

app.get(`/`, (req, res) => {
  console.log(req.query);
  res.status(200);
  res.send(req.query);
  res.send({"result": "GET 호출"});
})

app.post(`/post`, (req, res) => {
  console.log(req.body);
  res.status(200);
  res.send(req.body)
  res.send({"result": "POST 호출"});
})

app.listen(port, () => console.log("Listening on", port));

module.exports = app;