'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _handlebars = require('handlebars');

var _handlebars2 = _interopRequireDefault(_handlebars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_handlebars2.default.registerHelper('renderStars', function (starsRating) {
  var out = '';

  for (var i = 0; i < starsRating; i++) {
    out = out + '<i class="fa fa-star text-warning"></i>';
  }

  return out;
});

exports.default = _handlebars2.default;
//# sourceMappingURL=handlebarsHelpers.js.map