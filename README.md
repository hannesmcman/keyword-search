# keyword-search
===========

Determine whether a given query string contains keywords in a given item string, with a specified margin for spelling error based on the hamming distance.

## Installation

  `npm install keyword-search`

## Usage

```javascript
var keywordSearch = require('keyword-search');
keywordSearch('hello world', 'hellq wold', 1);
//returns true
```

## Tests

  `npm test`
