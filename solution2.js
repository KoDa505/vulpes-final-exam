'use strict';

var fs = require('fs');
var jsonfile = require('jsonfile');
var file = '/text.json'
var obj = {name: 'Daniella'};


function writeJSONFile(filename, object, callback) {
    runIn2seconds(callback(filename, object));
}


var FileWriter = function (object) {
  fs.writeFile(filename, object,  function (error) {
    if(err) {
       return console.log(err);
   }
   console.log("The file was saved!");
});

function runIn2seconds(callback) {
  setTimeout(callback, 2000);
};
