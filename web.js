var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  fs.FileSync('index.html', function (err, data) {
 if (err) throw err;
  output = data.buf.toStr();
  response.send(output);
      }
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
