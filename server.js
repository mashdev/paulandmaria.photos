// require files for filesystem and gmagick
var fs = require('fs'),
gm = require('gm').subClass({imageMagick: true}),
mysql = require('mysql');

// iterate through images directory to read file names to array
//var files = fs.readdirSync('images/');

var files = fs.readdirSync('images/');
// var resizeLocation = "views/public/webimages/"

// get array count and iterate through each file
// to create a thumbnail of each image in thumbs directory

var connection = mysql.createConnection({
    host: 'localhost',
    user: '',
    password: '',
    database: ''
});

connection.connect(function(err){
  // if (err) throw err;
  console.log("connected");
});

//** get images file names and insert each to images table **//
/*
for (var i = 0; i < files.length; i++) {

  var insertImageNames = "INSERT INTO images (imageName) VALUES (?)";

  connection.query(insertImageNames, files[i], function(err, result) {
    if (err) throw err;

    console.log("number of records inserted: " + i);
  });

}
*/

/*
// looks through images dir and creates a thumbnail @ 5%
for (let i = 0; i < files.length; i++) {
  gm('images/' + files[i])
  .resize(5,'%')
  .write(resizeLocation + 'tn_'+ files[i], function(err) {
    if(err) return console.dir(arguments)
    console.log(this.outname + "create :: " + arguments[3])
  })
}

// looks through images dir and creates a medium size image @ 10%
for (let i = 0; i < files.length; i++) {
  gm('images/' + files[i])
  .resize(10,'%')
  .write(resizeLocation + 'md_'+ files[i], function(err) {
    if(err) return console.dir(arguments)
    console.log(this.outname + "create :: " + arguments[3])
  })
}

// looks through images dir and creates a medium size image @ 15%
for (let i = 0; i < files.length; i++) {
  gm('images/' + files[i])
  .resize(15,'%')
  .write(resizeLocation + 'lg_'+ files[i], function(err) {
    if(err) return console.dir(arguments)
    console.log(this.outname + "create :: " + arguments[3])
  })
}
*/

/*
for( i = 0; i < files.length; i++){
  //console.log('<img src="thumbs\\' + files[i] + '" class="images">');
  if(files[i].substring(0,2) == "tn") {
    console.log('<img src="thumbs\\' + files[i] + '" class="images">');
  }
  if(files[i].substring(0,2) == "md") {
    console.log('<img src="thumbs\\' + files[i] + '" class="images">');
  }
  if(files[i].substring(0,2) == "lg") {
    console.log('<img src="thumbs\\' + files[i] + '" class="images">');
  }
}
*/
