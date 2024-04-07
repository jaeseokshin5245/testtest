const express = require("express");

const app = express();

const port = 3000;

app.set("port", port);

app.get(`/`, (req, res) => {


  console.log(req)
  res.status(200);
  res.send(req);
})

app.post(`/post`, (req, res) => {

  console.log(req)
  res.status(200);
  res.send(req);
})

app.listen(port, () => console.log("Listening on", port));

module.exports = app;