

'use strict';

var fs = require('fs');
function FileReader(filename, fs) {

  this.filename = filename;

  this.fs = fs;

}

FileReader.prototype.howManyAs = function (letter, cb) {

  this.fs.readFile(this.filename, function (error, content) {

    if (error) {

      return cb(error);

    }

    var stringContent = String(content);

    var count = 0;

    for (var i = 0; i < stringContent.length; i++) {

      if (stringContent[i] === letter) {

        count++;

      }

    }

    return cb(null, count);

  });

}

var countKorte = new FileReader('./korte.txt', fs);

countKorte.howManyAs('a', function (err, count) {

  console.log(count);

});
