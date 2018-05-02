'use strict';

var expect = require('chai').expect;
var keywordSearch = require('../index');

describe('#keywordSearch', function () {
  it('should work with single words', function () {
    var result = keywordSearch('hello', 'hellq', 1);
    expect(result).to.equal(true);
  });
});
