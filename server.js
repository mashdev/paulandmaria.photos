// require files for filesystem and gmagick
var fs = require('fs'),
gm = require('gm').subClass({imageMagick: true}),
mysql = require('mysql');

// iterate through images directory to read file names to array
// var files = fs.readdirSync('images/');
//
// var resizeLocation = "views/public/webimages/";
//
// gm('images/IMG_0697.JPG')
// .identify(function (err, data) {
//   if (!err) console.log(data)
// });
//

/*

var connection = mysql.createConnection({
    host: 'localhost',
    user: '[username]',
    password: '[password]',
    database: '[database]'
});

connection.connect(function(err){
  if (err) throw err;
  console.log("connected");
});

*/

// get images file names and insert each to images table **//

/*
function insertImgData(data){
  let sql = "INSERT INTO images (imageName, orientation, category) VALUES (?,?,?)";

  connection.query(sql, data, function(err, result) {
    if (err) {
      throw err;
    }
    else {
      console.log("Data inserted into database");
    }
});
}
*/

/**
 * Test code for creating clear square sized thumbnails.
 *
const width = 192;
const height = 192;
gm('md_IMG_0188.JPG')
  .gravity('Center')
  .crop(height, width)
  .write('./tn_test2.JPG', (err) => {
    if(err) {
      console.log(err);
    }
  });
*/

/*
for(let i = 0; i < files.length; i++) {
  gm('images/' + files[i]).size(function(err, value) {
    if(value.width > 5000) {
      imgVal = [files[i], "landscape", "reception"];
      insertImgData(imgVal);
    }
    else {
      imgVal = [files[i], "portrait", "reception"];
      insertImgData(imgVal);
    }
  })
}

*/

// looks through images dir and creates a thumbnail @ 5%
/*
for (var i = 0; i < files.length; i++) {
  gm('images/' + files[i])
  .resize(5,'%')
  .write(resizeLocation + 'tn_'+ files[i], function(err) {
    // if(!err) return console.dir(arguments)
    if(!err) return console.log(this.outname);
  });
};
*/

// looks through images dir and creates a medium size image @ 10%

//
// for (let i = 0; i < files.length; i++) {
//   gm('images/' + files[i])
//   .resize(10,'%')
//   .write(resizeLocation + 'md_'+ files[i], function(err) {
//     // if(err) return console.dir(arguments)
//     if(!err) return console.log(this.outname);
//   });
//
// };


// looks through images dir and creates a medium size image @ 15%

// for (let i = 0; i < files.length; i++) {
//   gm('images/' + files[i])
//   .resize(15,'%')
//   .write(resizeLocation + 'lg_'+ files[i], function(err) {
//     // if(err) return console.dir(arguments)
//     if(!err) return console.log(this.outname);
//   })
// }

// console.log("exit process");
// return process.exit(1);
