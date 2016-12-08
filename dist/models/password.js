'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _db = require('../db/db');

var _db2 = _interopRequireDefault(_db);

var _taiPasswordStrength = require('tai-password-strength');

var _taiPasswordStrength2 = _interopRequireDefault(_taiPasswordStrength);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Password = _db2.default.define('password', {
  id: {
    type: _sequelize2.default.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  text: {
    type: _sequelize2.default.STRING
  },
  rank: {
    type: _sequelize2.default.INTEGER
  },
  strength: {
    type: _sequelize2.default.STRING
  },
  score: {
    type: _sequelize2.default.INTEGER
  },
  textLength: {
    type: _sequelize2.default.INTEGER
  },
  containsLowercase: {
    type: _sequelize2.default.BOOLEAN
  },
  containsUppercase: {
    type: _sequelize2.default.BOOLEAN
  },
  containsNumbers: {
    type: _sequelize2.default.BOOLEAN
  },
  containsSymbols: {
    type: _sequelize2.default.BOOLEAN
  }
}, {
  freezeTableName: true, // Model tableName will be the same as the model name
  classMethods: {
    _create: function _create(text) {
      var newPassword = Password.build({
        text: text
      });

      newPassword.testStrength();
      return newPassword.save({ returning: true });
    },
    _build: function _build(text) {
      var newPassword = Password.build({
        text: text
      });

      newPassword.testStrength();
      return newPassword;
    }
  },
  instanceMethods: {
    testStrength: function testStrength() {
      if (this.text) {
        var strengthTester = new _taiPasswordStrength2.default.PasswordStrength();
        var results = strengthTester.check(this.text);

        this.rank = this.rank || 0;
        this.score = results.charsetSize;
        this.textLength = results.passwordLength;
        this.strength = results.strengthCode;
        this.containsLowercase = results.charsets.lower;
        this.containsUppercase = results.charsets.upper;
        this.containsNumbers = results.charsets.number;
        this.containsSymbols = results.charsets.symbol;
      }
    },
    prettyStrength: function prettyStrength() {
      var pretty = '';
      if (this.strength === 'VERY_WEAK') {
        pretty = 'Very Weak';
      } else if (this.strength === 'WEAK') {
        pretty = 'Weak';
      } else if (this.strength === 'REASONABLE') {
        pretty = 'Ok';
      } else if (this.strength === 'STRONG') {
        pretty = 'Strong';
      } else if (this.strength === 'VERY_STRONG') {
        pretty = 'Very Strong';
      }
      return pretty;
    },
    rankDescription: function rankDescription() {
      console.log(this.rank);
      if (this.rank) {
        return 'Your password is in the top ' + this.rank + ' most common passwords';
      } else {
        return 'Your password is not in the top 10,000 most common passwords.';
      }
    },
    apiResult: function apiResult() {
      return {
        text: this.text,
        strength: this.prettyStrength(),
        score: this.score,
        rank: this.rank,
        rankDescription: this.rankDescription(),
        textLength: this.textLength,
        containsLowercase: this.containsLowercase,
        containsUppercase: this.containsUppercase,
        containsNumbers: this.containsNumbers,
        containsSymbols: this.containsSymbols
      };
    }

  }
});

exports.default = Password;
//# sourceMappingURL=password.js.map