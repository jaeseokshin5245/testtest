const express = require("express");
const app = express();
const port = 3000;
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))
app.set("port", port);

const id = document.querySelector("id"),
  result = document.querySelector("result");

app.get('/', (req, res) => {
  res.status(200);
  console.log("GET 호출 / data : " + req.query.body);
  console.log('path : ' + req.path);
  res.send('get success')
});

app.post('/post', (req, res) => { 
  var id = req.body.id;
  var result = req.body.result;
  
  console.log("POST 호출 / id : " + req.body.id);
  console.log(req.body);
  console.log("======================================");
  console.log(req.id);
  console.log("======================================");
  console.log(req.body.id);
  console.log("======================================");
  console.log(req.body.result);
  console.log("======================================");
  console.log("id");
  console.log("======================================");
  console.log("result");curl -X POST http://13.209.96.66:3000/post -H "Content-Type: application/json" -d '{"id": 123}'

  res.send('post success');
});


app.put('/put/:id', (req, res) => {
  res.status(200);
  console.log("PUT 호출 / data : " + req.parmas.id);
  console.log('path : ' + req.path);
  res.send('put success');
});

app.delete('/delete/:id', (req, res) => {
  res.status(200);
  console.log("DELETE 호출 / data : " + req.query.id);
  console.log('path : ' + req.path);
  res.send('delete success');
});

app.listen(port, () => console.log("Listening on", port));

module.exports = app;
