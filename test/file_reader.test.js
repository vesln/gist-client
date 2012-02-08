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
var fs = require('fs');

/**
 * The tested class.
 * 
 * @type {Function}
 */
var FileReader = require('../lib/file_reader');

describe('FileReader', function() {
  describe('read', function() {
    it('should read and return the content of multiple files', function(done) {
      fs.stub('readFile').and.replace(function(source, encoding, cb) {
        switch (source) {
          case './tmp/test.js': return cb(null, 'test');
          case './tmp/foo.js': return cb(null, 'foo');
        }
      });
      var reader = new FileReader;
      reader.read(['./tmp/test.js', './tmp/foo.js'], function(err, files) {
        (err === null).should.be.true;
        files[0].file.should.eql('./tmp/test.js');
        files[0].content.should.eql('test');
        files[1].file.should.eql('./tmp/foo.js');
        files[1].content.should.eql('foo');
        done();
        fs.readFile.reset();
      });
    });
    
    it('should read and return error if any', function(done) {
      fs.stub('readFile').and.replace(function(source, encoding, cb) {
        cb(new Error('Test error'));
      });
      var reader = new FileReader;
      reader.read(['./tmp/test.js', './tmp/foo.js'], function(err, files) {
        err.should.be.an.instanceof(Error);
        done();
        fs.readFile.reset();
      });
    });
  });
});