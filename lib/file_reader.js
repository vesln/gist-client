/*!
 * gist-client.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Dependencies.
 */
var fs = require('fs');
var async = require('async');

/**
 * `FileReader` constructor.
 * 
 * @class
 */
function FileReader() {
  this.encoding = 'uft8';
};

/**
 * Read the content of files.
 * 
 * @param {Array} Files.
 * @param {Function} Callback.
 * @api public
 */
FileReader.prototype.read = function(files, cb) {
  var data = [];
  var self = this;
  
  function read(file, done) {
    fs.readFile(file, self.encoding, function(err, content) {
      if (err) return done(err);
      data.push({file: file, content: content});
      done();
    });
  };
  
  async.forEachSeries(files, read, function(err) {
    if (err) return cb(err);
    cb(null, data);
  });
};

/**
 * Expose `FileReader`.
 */
module.exports = FileReader;