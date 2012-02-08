/*!
 * gist-client.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */
 
/**
 * Support.
 */
var should = require('chai').should();

/**
 * The tested class.
 * 
 * @type {Function}
 */
var Gist = require('../lib/gist');

describe('Gist', function() {
  describe('publish', function() {
    it('should publish a gist', function() {
      var gist = new Gist(['./tmp/foo.txt', './tmp/test.txt']);
      gist.publish(function(err) {
        (err === null).should.be.true;
      });
    });
  });
});