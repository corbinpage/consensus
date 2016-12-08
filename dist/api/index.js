'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _package = require('../../package.json');

var _express = require('express');

var _passwords = require('./passwords');

var _passwords2 = _interopRequireDefault(_passwords);

var _displayReview = require('./display-review');

var _displayReview2 = _interopRequireDefault(_displayReview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
	var config = _ref.config,
	    db = _ref.db;

	var api = (0, _express.Router)();

	// mount the customer-reviews resource
	api.use('/v1/customer-reviews', (0, _passwords2.default)({ config: config, db: db }));

	// mount the customer-reviews resource
	api.use('/v1/display-review', (0, _displayReview2.default)({ config: config, db: db }));

	// perhaps expose some API metadata at the root
	api.get('/', function (req, res) {
		console.log('asd');
		res.json({ version: _package.version });
	});

	return api;
};
//# sourceMappingURL=index.js.map