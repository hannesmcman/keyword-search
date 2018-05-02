'use strict';

var expect = require('chai').expect;
var keywordSearch = require('../index');

describe('#keywordSearch', function () {
  it('should return true for single words with a hamming distance of 1', function () {
    var result = keywordSearch('hello', 'hellq', 1);
    expect(result).to.equal(true);
  });

  it('should return true for single words with a hamming distance of 2', function () {
    var result = keywordSearch('testing', 'tesrnng', 2);
    expect(result).to.equal(true);
  });

  it('should return true for multiple words with a hamming distance of 1', function () {
    var result = keywordSearch('thix', 'this is a test', 1);
    expect(result).to.equal(true);
  });

  it('should return true for multiple words with a hamming distance of 2', function () {
    var result = keywordSearch('thix txsr', 'this is a test', 2);
    expect(result).to.equal(true);
  });

  it('should return true for multiple words with a hamming distance of 2', function () {
    var result = keywordSearch('thix txsr', 'this is a test', 2);
    expect(result).to.equal(true);
  });

  it('should return false for multiple words with a hamming distance greater than specified', function () {
    var result = keywordSearch('thix txsr', 'this is a test', 1);
    expect(result).to.equal(false);
  });

  it('should return false when words in query are not in item', function () {
    var result = keywordSearch('this not', 'this is a test', 1);
    expect(result).to.equal(false);
  });
});
