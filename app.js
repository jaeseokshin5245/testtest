const express = require("express");
const app = express();
const port = 3000;
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))
app.set("port", port);

app.get('/', (req, res) => {
  res.status(200);
  console.log("GET 호출 / data : " + req.query.body);
  console.log('path : ' + req.path);
  res.send('get success')
});


app.post('/post', (req, res) => {
  console.log("POST 호출 / data : " + req.body.data);
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
