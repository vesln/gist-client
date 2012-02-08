/*!
 * gist-client.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT Licesnse.
 */

/**
 * Gist constructor.
 */
function Gist(files) {
  this.files = Array.isArray(files) ? files : [files];
};

/**
 * Publish gists.
 * 
 * @param {Function} Callback.
 */
Gist.prototype.publish = function(fn) {
  fn(null);
};

/**
 * Expose `Gist`.
 */
module.exports = Gist;