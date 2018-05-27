var fs = require('fs');
var rs = fs.createReadStream('./myFile.text');
rs.on('open', function () {
  console.log('The file is open');
});
