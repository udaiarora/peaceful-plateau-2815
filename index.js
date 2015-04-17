var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public', { maxAge: 7200000 }));

var imagename=1;
var ext=".jpg";
function getimage() {
	imagename=parseInt(1 + ((new Date().getTime()-1429254000000)/86400000));
	imagename=imagename>64?1:imagename;
	return {bgurl:imagename+ext};
}
setInterval(function(){imagename=imagename>64?1:imagename+1}, );



app.get('/', function(request, response) {
  response.send(getimage());
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
