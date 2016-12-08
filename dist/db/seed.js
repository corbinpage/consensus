'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _password = require('../models/password');

var _password2 = _interopRequireDefault(_password);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var seedPasswords = _fs2.default.readFileSync('src/lib/10_million_password_list_top_10000.txt').toString().split("\n");
// import db from '/db';

var rank = 1;
var passwords = seedPasswords.map(function (p) {
  var newPassword = _password2.default.build({
    text: p,
    rank: rank
  });

  newPassword.testStrength();
  rank++;
  return newPassword;
});

_password2.default.bulkCreate(passwords.map(function (p) {
  return p.toJSON();
}));
//# sourceMappingURL=seed.js.map