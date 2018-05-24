var express = require('express'),
exphbs = require('express-handlebars'),
mysql = require('mysql'),
fs = require('fs'),
path = require('path');

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

const publicPath = path.join(__dirname, 'views/public');
const imagesPath = path.join(__dirname, 'views/public/webimages');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

/** Home page **/
app.use('/', express.static(publicPath));
app.get('/', function(req, res){

    var sql = 'SELECT * FROM bb_terms';

    connection.query(sql, function(err, rows, fields){
        if(err) {
            console.log('error in query' + err);
        }

        console.log('successful query');
        res.render('home', {
            row: rows,
            });
    });

});

app.use('/about', express.static(publicPath));
app.get('/about', function(req, res){

  var files = fs.readdirSync(publicPath + "/webimages");
  var sql1 = 'SELECT * FROM images limit 0,96';
  var sql2 = 'SELECT * FROM images limit 97,193';
  var sql3 = 'SELECT * FROM images limit 194,290';
  var sql4 = 'SELECT * FROM images limit 291,387';

  connection.query(sql1, function(err, rows1) {
    connection.query(sql2, function(err, rows2) {
      connection.query(sql3, function(err, rows3) {
        connection.query(sql4, function(err, rows4) {
          if(err) {
              console.log('error in query' + err)
          }
          res.render('about', {
              col1: rows1,
              col2: rows2,
              col3: rows3,
              col4: rows4,
          });
        }); //end connection.query(sql4)
      }); //end connection.query(sql3)
    }); //end connection.query(sql2)
  }); //end connection.query(sql1)
});

/************
exports.showAboutUs1 = function (req, res) {
 req.getConnection(function (err, connection) {
   connection.query('SELECT * FROM `editablecontent` WHERE ElementId = "AboutUsDiv1" ORDER BY `id` DESC LIMIT 1  ', [], function (err, result1) {
       connection.query('SELECT * FROM `editablecontent` WHERE ElementId = "AboutUsDiv2" ORDER BY `id` DESC LIMIT 1  ', [], function (err, result2) {
           return res.render('AboutUs', {
               data1: result1,
               data2: result2,
               admin: req.session.admin,
               user: req.session.user
           });
           console.log(result1);
           console.log(result2);
       });
   });
});
};



************/


app.listen(3000, function () {
    console.log('express-handlebars example server listening on: 3000');
});
