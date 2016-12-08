'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _db = require('./db/db');

var _db2 = _interopRequireDefault(_db);

var _password = require('./models/password');

var _password2 = _interopRequireDefault(_password);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (callback) {
  callback(_db2.default);
};
//# sourceMappingURL=db.js.map