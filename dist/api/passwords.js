'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _resourceRouterMiddleware = require('resource-router-middleware');

var _resourceRouterMiddleware2 = _interopRequireDefault(_resourceRouterMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var config = _ref.config,
      db = _ref.db;
  return (0, _resourceRouterMiddleware2.default)({

    /** Property name to store preloaded entity on `request`. */
    id: 'password',

    /** For requests with an `id`, you can auto-load the entity.
     *  Errors terminate the request, success sets `req[id] = data`.
     */
    load: function load(req, id, callback) {
      db.models.password.find({ where: { text: id } }).then(function (password) {
        if (!password) {
          callback(null, db.models.password._build(id));
        } else {
          // let err = password ? null : 'Not found';
          callback(null, password);
        }
      });
    },


    /** GET / - List all entities */
    // index({ params }, res) {
    //   db.models.password.findAll().then(function(passwords) {
    //     console.log(passwords);
    //     res.json(passwords);
    //   })
    // },

    /** POST / - Create a new entity */
    // create({ body }, res) {
    //   body.id = db.models.password.length.toString(36);
    //   db.models.password.push(body);
    //   res.json(body);
    // },

    /** GET /:id - Return a given entity */
    read: function read(_ref2, res) {
      var password = _ref2.password;

      res.json(password.apiResult());
    }
  });
};
//# sourceMappingURL=passwords.js.map