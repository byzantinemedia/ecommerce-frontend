var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname);
app.use('/static', express.static('dist'));


app.use('/', function(req, res) {
    res.render('index');
});

process.on('uncaughtException', function(err) {
    console.log(err);
});

// Move port to config file with env
var server = app.listen(1337, function() {
    console.log('Server application listening at port %s.', 1337);
});
