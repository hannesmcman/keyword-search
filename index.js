'use strict';

var hamming = require('hamming');

module.exports = function (query, item, accuracy) {
	const keywords = query.split(' ');
	const itemWords = item.split(' ');
	return keywords.every(keyword =>
		itemWords.some(
			word =>
				keyword.length <= word.length &&
				hamming(keyword, word.slice(0, keyword.length)) <= accuracy,
		),
	);
};
