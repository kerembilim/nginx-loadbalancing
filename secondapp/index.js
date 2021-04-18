var express = require('express');
var app = express();
var port = 4000;
app.get('/', (req, res) => {
  res.send(`response from :  secondapp`)
});
app.listen(port, () => {
  console.log(`Running on 4000`);
});