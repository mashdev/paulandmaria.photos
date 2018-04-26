// require files for filesystem and gmagick
var fs = require('fs'),
gm = require('gm').subClass({imageMagick: true});

// iterate through images directory to read file names to array
var files = fs.readdirSync('thumbs/');

// get array count and iterate through each file
// to create a thumbnail of each image in thumbs directory

/*
for (let i = 0; i < files.length; i++) {
  gm('images/' + files[i])
  .resize(10, 10, '%')
  .write('thumbs/'+'tn_'+ files[i], function(err) {
    if(err) return console.dir(arguments)
    console.log(this.outname + "create :: " + arguments[3])
  })
}
*/

for( i = 0; i < files.length; i++){
  console.log('<img src="thumbs\\' + files[i] + '" class="images">');
}