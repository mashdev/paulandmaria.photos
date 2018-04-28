// require files for filesystem and gmagick
var fs = require('fs'),
gm = require('gm').subClass({imageMagick: true});

// iterate through images directory to read file names to array
//var files = fs.readdirSync('images/');

var files = fs.readdirSync('webimages/');

// get array count and iterate through each file
// to create a thumbnail of each image in thumbs directory


// looks through images dir and creates a thumbnail @ 5%
for (let i = 0; i < files.length; i++) {
  gm('images/' + files[i])
  .resize(5,'%')
  .write('webimages/'+'tn_'+ files[i], function(err) {
    if(err) return console.dir(arguments)
    console.log(this.outname + "create :: " + arguments[3])
  })
}

// looks through images dir and creates a medium size image @ 10%
for (let i = 0; i < files.length; i++) {
  gm('images/' + files[i])
  .resize(10,'%')
  .write('webimages/'+'md_'+ files[i], function(err) {
    if(err) return console.dir(arguments)s
    console.log(this.outname + "create :: " + arguments[3])
  })
}

// looks through images dir and creates a medium size image @ 15%
for (let i = 0; i < files.length; i++) {
  gm('images/' + files[i])
  .resize(15,'%')
  .write('webimages/'+'lg_'+ files[i], function(err) {
    if(err) return console.dir(arguments)
    console.log(this.outname + "create :: " + arguments[3])
  })
}



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