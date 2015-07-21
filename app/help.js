var fs = require('fs');

module.exports = function(){
  printHelpMessage();
  process.exit(1);
}

function printHelpMessage(){
  var message = fs.readFileSync('./app/helpMessage.txt', {encoding: 'utf8'});
  console.log(message);
}
