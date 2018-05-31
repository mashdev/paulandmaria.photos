/** Add required modules **/
var express = require('express'),
exphbs = require('express-handlebars'),
mysql = require('mysql'),
fs = require('fs'),
path = require('path'),
url = require('url');
require('dotenv').config();

/** connect to sql db & connect **/
var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER ,
    password: process.env.DB_PASS,
    database: process.env.DATABASE
});

connection.connect(function(err){
    if (err) throw err
    console.log('Connected');
});

/** instantiate express app **/
var app = express();

/** assign dedicated image paths to variable **/
const publicPath = path.join(__dirname, 'views/public');
const imagesPath = path.join(__dirname, 'views/public/webimages');

/** set handlebars as templating system **/
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

/** Home page **/
app.use('/', express.static(publicPath));
app.get('/', function(req, res){
  res.render('home', {
    page: 'Maria & Paul',
  });
});

/** Images page**/
app.use('/images', express.static(publicPath));
app.get('/images', function(req, res){
if(req.query.id == "all"){
    /** query to display all images**/
    var sql1 = 'SELECT * FROM images limit 105';
    var sql2 = 'SELECT * FROM images where ID > 105 limit 100';
    var sql3 = 'SELECT * FROM images where ID > 201 limit 106';
    var sql4 = 'SELECT * FROM images where ID > 302';

    connection.query(sql1, function(err, rows1) {
      connection.query(sql2, function(err, rows2) {
        connection.query(sql3, function(err, rows3) {
          connection.query(sql4, function(err, rows4) {
            if(err) {
                console.log('error in query' + err)
            }
            res.render('images', {
                col1: rows1,
                col2: rows2,
                col3: rows3,
                col4: rows4,
                page: 'Images',
            });
          }); //end connection.query(sql4)
        }); //end connection.query(sql3)
      }); //end connection.query(sql2)
    }); //end connection.query(sql1)
} else if (req.query.id == "bridesmaids") {
  /** query to display bride & bridesmaids category**/
  var sql1 = 'SELECT * FROM images where category="bride-bridesmaids" limit 12';
  var sql2 = 'SELECT * FROM images where category="bride-bridesmaids" and ID > 13 limit 12';
  var sql3 = 'SELECT * FROM images where category="bride-bridesmaids" and ID > 25 limit 12';
  var sql4 = 'SELECT * FROM images where category="bride-bridesmaids" and ID > 37';

  connection.query(sql1, function(err, rows1) {
    connection.query(sql2, function(err, rows2) {
      connection.query(sql3, function(err, rows3) {
        connection.query(sql4, function(err, rows4) {
          if(err) {
              console.log('error in query' + err)
          }
          res.render('images', {
              col1: rows1,
              col2: rows2,
              col3: rows3,
              col4: rows4,
              page: 'Bride & Bridesmaids',
          });
        }); //end connection.query(sql4)
      }); //end connection.query(sql3)
    }); //end connection.query(sql2)
  }); //end connection.query(sql1)

} else if (req.query.id == "groom-groomsmen") {
  /** query to display groom & groomsmen category**/
  var sql1 = 'SELECT * FROM images where category = "groom-groomsmen" and ID > 50 limit 12';
  var sql2 = 'SELECT * FROM images where category = "groom-groomsmen" and ID > 62 limit 9';
  var sql3 = 'SELECT * FROM images where category = "groom-groomsmen" and ID > 73 limit 9';
  var sql4 = 'SELECT * FROM images where category = "groom-groomsmen" and ID > 82 ';

  connection.query(sql1, function(err, rows1) {
    connection.query(sql2, function(err, rows2) {
      connection.query(sql3, function(err, rows3) {
        connection.query(sql4, function(err, rows4) {
          if(err) {
              console.log('error in query' + err)
          }
          res.render('images', {
              col1: rows1,
              col2: rows2,
              col3: rows3,
              col4: rows4,
              page: 'Groom & Groomsmen',
          });
        }); //end connection.query(sql4)
      }); //end connection.query(sql3)
    }); //end connection.query(sql2)
  }); //end connection.query(sql1)
}
 else if (req.query.id == "venue") {
   /** query to display venue category**/
  var sql1 = 'SELECT * FROM images where category = "venue" and ID > 92 limit 5';
  var sql2 = 'SELECT * FROM images where category = "venue" and ID > 96 limit 4';
  var sql3 = 'SELECT * FROM images where category = "venue" and ID > 100 limit 4';
  var sql4 = 'SELECT * FROM images where category = "venue" and ID > 104 ';

  connection.query(sql1, function(err, rows1) {
    connection.query(sql2, function(err, rows2) {
      connection.query(sql3, function(err, rows3) {
        connection.query(sql4, function(err, rows4) {
          if(err) {
              console.log('error in query' + err)
          }
          res.render('images', {
              col1: rows1,
              col2: rows2,
              col3: rows3,
              page: 'Venue',
          });
        }); //end connection.query(sql4)
      }); //end connection.query(sql3)
    }); //end connection.query(sql2)
  }); //end connection.query(sql1)
}  else if (req.query.id == "photo-shoot") {
  /** query to display photoshoot category**/
  var sql1 = 'SELECT * FROM images where category = "photo-shoot" and ID > 108 limit 24';
  var sql2 = 'SELECT * FROM images where category = "photo-shoot" and ID > 132 limit 21';
  var sql3 = 'SELECT * FROM images where category = "photo-shoot" and ID > 153 limit 23';
  var sql4 = 'SELECT * FROM images where category = "photo-shoot" and ID > 176 ';

  connection.query(sql1, function(err, rows1) {
    connection.query(sql2, function(err, rows2) {
      connection.query(sql3, function(err, rows3) {
        connection.query(sql4, function(err, rows4) {
          if(err) {
              console.log('error in query' + err)
          }
          res.render('images', {
              col1: rows1,
              col2: rows2,
              col3: rows3,
              col4: rows4,
              page: 'Photoshoot',
          });
        }); //end connection.query(sql4)
      }); //end connection.query(sql3)
    }); //end connection.query(sql2)
  }); //end connection.query(sql1)
}  else if (req.query.id == "reception") {
  /** query to display reception category**/
  var sql1 = 'SELECT * FROM images where category = "reception" and ID > 195 limit 58';
  var sql2 = 'SELECT * FROM images where category = "reception" and ID > 253 limit 53';
  var sql3 = 'SELECT * FROM images where category = "reception" and ID > 300 limit 44';
  var sql4 = 'SELECT * FROM images where category = "reception" and ID > 343 limit 40';


  connection.query(sql1, function(err, rows1) {
    connection.query(sql2, function(err, rows2) {
      connection.query(sql3, function(err, rows3) {
        connection.query(sql4, function(err, rows4) {
          if(err) {
              console.log('error in query' + err)
          }
          res.render('images', {
              col1: rows1,
              col2: rows2,
              col3: rows3,
              col4: rows4,
              page: 'Reception',

          });
        }); //end connection.query(sql4)
      }); //end connection.query(sql3)
    }); //end connection.query(sql2)
  }); //end connection.query(sql1)
}


}); // end apt.get(/images)

/** Videos page **/
app.use('/videos', express.static(publicPath));
app.get('/videos', function(req, res){
  res.render('videos', {
    page: 'Videos',
  });
});

/** 404 page **/
app.get('*', function(req, res, next) {
  err = new Error(`${req.ip} tried to reach ${req.originalUrl}`); // Tells us which IP tried to reach a particular URL
  err.statusCode = 404;
  err.shouldRedirect = true; //New property on err so that our middleware will redirect
  next(err);
});

app.use(function(err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500; // Sets a generic server error status code if none is part of the err

  if (err.shouldRedirect) {
    res.render('errorPage') // 
  } else {
    res.status(err.statusCode).send(err.message); // If shouldRedirect is not defined in our error, sends our original err data
  }
});

/** listen on port 3000 **/
app.listen(3000, function () {
    console.log('listening on: 3000');
});
