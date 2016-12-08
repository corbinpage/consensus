'use strict';

var _db = require('./db');

var _db2 = _interopRequireDefault(_db);

var _password = require('../models/password');

var _password2 = _interopRequireDefault(_password);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_password2.default.sync({ force: true });
//# sourceMappingURL=migrate.js.map