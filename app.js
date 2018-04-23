var express = require('express'), 
exphbs = require('express-handlebars'),
mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: '',
    password: '',
    database: ''
});

connection.connect(function(err){
    if (err) throw err
    console.log('Connected to mysql');
});

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res){
    var sql = 'SELECT * FROM bb_terms';
    connection.query(sql, function(err, rows, fields){
        if(err) {
            console.log('error in query' + err);
        }
        
        console.log('successful query');
        res.render('home', {row: rows});
    });
    
});

app.get('/about', function(req, res){
    res.render('about');
});

app.listen(3000, function () {
    console.log('express-handlebars example server listening on: 3000');
});