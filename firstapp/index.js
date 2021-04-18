var express = require('express');
var app = express();
var port = 3000;
app.get('/', (req, res) => {
  res.send(`response from :  firstapp`)
});
app.listen(port, () => {
  console.log(`Running on 3000`);
});