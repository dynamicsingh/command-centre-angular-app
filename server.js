var express        = require('express');
var app            = express();
var http           = require('http');
var passport       = require('passport');
var proxy          = require('express-http-proxy');

var port = process.env.PORT || 8080; // set our port
var staticdir = process.env.NODE_ENV === 'production' ? 'dist.prod' : 'dist.dev'; // get static files dir

// get all data/stuff of the body (POST) parameters
//app.use(bodyParser.json()); // parse application/json
//app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
//app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
//app.use(passport.initialize());
//app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.compress())
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(passport.initialize());
app.use(app.router);
app.use(express.static(__dirname + '/' + staticdir,{maxAge: 30000})); // set the static files location /public/img will be /img for users
app.use(function(req, res) {
    return res.redirect(req.protocol + '://' + req.get('Host') + '/#' + req.url)
})
// routes ==================================================
require('./devServer/routes')(app); // configure our routes

// start app ===============================================
app.listen(port);                   // startup our app at http://localhost:8080
console.log('Starting server on port ' + port);       // shoutout to the user
exports = module.exports = app;             // expose app







