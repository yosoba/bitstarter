var express = require('express');
var app = express();
app.use(express.logger());

var fs = require('fs');
//var data = fs.readFileSync('./index.html', 'utf8');
// wait for the result, then use it
//console.log(data);

var buffer = fs.readFileSync('./index.html', 'utf8');
console.log(buffer.toString("utf8"));

app.get('/', function(request, response) {
  response.send(buffer.toString("utf8");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
