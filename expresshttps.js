var express	=	require('express');
var app		=	express();
var path	=	require('path');
var fs  	=	require('fs');
var key 	= fs.readFileSync('server-key.pem');
var cert 	= fs.readFileSync('server-cert.pem');

var options = {
    key: key,
    cert: cert
};

var https	=	require('https').Server(options,app);


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res){
	res.render('index',{msg:'Se encuentra navegando de forma segura con HTTPS.'})
});

https.listen(3000, function(){
	console.log('Listening at https://localhost:3000');
});