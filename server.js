var fs = require('fs')
  , gm = require('gm').subClass({imageMagick: true});

var files = fs.readdirSync('images/');
for (let i = 0; i < files.length; i++) {
  gm('images/' + files[i])
  .resize(10, 10, '%')
  .write('thumbs/'+'tn_'+ files[i], function(err) {
    if(err) return console.dir(arguments)
    console.log(this.outname + "create :: " + arguments[3])
  })
  
}