var csv = require('csv');
var fs = require('fs');

module.exports = function(filePath){
  var stream = fs.createReadStream(filePath);

  csv.parse(stream, function(err, data){
    if(err) throw err;
    console.log('data');
  })
}
