
var express      = require('express');
var app          = express();
var port         = process.env.PORT || 8080;
var mongoose     = require('mongoose');
var jwt          = require('jsonwebtoken');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');



var configDB = require('./config/database.js');
app.set('superSecret', configDB.secret);

app.use('/bower_components', express.static(__dirname+'/bower_components'));
app.use( express.static(__dirname+'/public'));
mongoose.connect(configDB.url);


app.use(morgan('dev')); 
app.use(cookieParser());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));


require('./app/routes.js')(app);


app.listen(port);
console.log('Listening on port: ' + port);
