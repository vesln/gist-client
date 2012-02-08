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
var jack = require('jack');
var FileReader = require('../lib/file_reader');

/**
 * The tested class.
 * 
 * @type {Function}
 */
var Gist = require('../lib/gist');

describe('Gist', function() {
  describe('publish', function() {
    it('should require file content', function(done) {
      var gist = new Gist(['foo.txt', 'bar.txt']);
      gist.fileReader.stub('read').and.replace(function(files) {
        files.should.eql(['foo.txt', 'bar.txt']);
        done();
      });
      gist.publish(function(err) {});
    });
    
    it('should return error if there was an erro while reading files', function(done) {
      var gist = new Gist(['foo.txt', 'bar.txt']);
      gist.fileReader.stub('read').and.replace(function(files, cb) {
        cb(new Error('Foo'));
      });
      gist.publish(function(err) {
        err.should.be.an.instanceof(Error);
        done();
      });
    });
  });
});