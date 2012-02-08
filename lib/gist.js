/*!
 * gist-client.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Gist constructor.
 * 
 * @class
 */
function Gist(files) {
  this.files = Array.isArray(files) ? files : [files];
};

/**
 * Publish gists.
 * 
 * @param {Function} Callback.
 * @api public
 */
Gist.prototype.publish = function(fn) {
  fn(null);
};

/**
 * Expose `Gist`.
 */
module.exports = Gist;