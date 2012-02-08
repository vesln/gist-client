/*!
 * gist-client.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Dependencies.
 */
var FileReader = require('./file_reader');

/**
 * Gist constructor.
 * 
 * @class
 */
function Gist(files) {
  this.files = Array.isArray(files) ? files : [files];
  this.fileReader = new FileReader;
};

/**
 * Publish gists.
 * 
 * @param {Function} Callback.
 * @api public
 */
Gist.prototype.publish = function(fn) {
  this.fileReader.read(this.files, function(err, data) {
    if (err) return fn(err);
    fn(null);
  });
};

/**
 * Expose `Gist`.
 */
module.exports = Gist;