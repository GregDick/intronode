#!/usr/bin/env node

var argv = require('yargs')
  .argv;
var prompt = require('prompt');
var fs = require('fs');

var help = require('./app/help');
var zipFile = require('./app/zipFile');
var convert = require('./app/convert');


if(argv.help){
  help();
}

prompt.override = argv;
prompt.message = prompt.delimiter = '';
prompt.start();
prompt.get(['name'], function (err, result) {
  printMessage(result.name);
});

function printMessage(name){
  console.log('hey ' + name);
}

if(argv.file){
  zipFile(argv.file);
}

if(argv.convert){
  convert(argv.convert);
}




