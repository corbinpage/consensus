'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _resourceRouterMiddleware = require('resource-router-middleware');

var _resourceRouterMiddleware2 = _interopRequireDefault(_resourceRouterMiddleware);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var config = _ref.config,
      db = _ref.db;
  return (0, _resourceRouterMiddleware2.default)({

    /** Property name to store preloaded entity on `request`. */
    id: 'sourceCode',

    /** For requests with an `id`, you can auto-load the entity.
     *  Errors terminate the request, success sets `req[id] = data`.
     */
    load: function load(req, id, callback) {
      var sourceCode = id,
          err = sourceCode ? null : 'Not found';
      callback(err, sourceCode);
    },


    /** GET / - List all entities */
    index: function index(_ref2, res) {
      var params = _ref2.params;

      res.json(params);
    },


    /** POST / - Create a new entity */
    // create({ body }, res) {
    //   body.id = db.models.password.length.toString(36);
    //   db.models.password.push(body);
    //   res.json(body);
    // },

    /** GET /:id - Return a given entity */
    read: function read(_ref3, res) {
      var sourceCode = _ref3.sourceCode;

      // res.json( sourceCode )  
      res.sendFile(_path2.default.resolve('src/views/forum.html'));
    }
  });
};
//# sourceMappingURL=display-review.js.map