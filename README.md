# keyword-search
[![Build Status](https://travis-ci.org/hannesmcman/keyword-search.svg?branch=master)](https://travis-ci.org/hannesmcman/keyword-search)
[![Coverage Status](https://coveralls.io/repos/github/hannesmcman/keyword-search/badge.svg?branch=master)](https://coveralls.io/github/hannesmcman/keyword-search?branch=master)

Determine whether a given query string contains keywords in a given item string, with a specified margin for spelling error based on the hamming distance.

## Installation

  `npm install keyword-search`

## Usage

```javascript
var keywordSearch = require('keyword-search');
keywordSearch('hello world', 'hellq woeld', 1);
//returns true
```

## Tests

  `npm test`
