'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _resourceRouterMiddleware = require('resource-router-middleware');

var _resourceRouterMiddleware2 = _interopRequireDefault(_resourceRouterMiddleware);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _handlebars = require('handlebars');

var _handlebars2 = _interopRequireDefault(_handlebars);

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

      var context = {
        reviews: [{
          author: {
            name: "Bob Smith",
            description: "My Description",
            postNumber: "1000",
            postedAt: "July 1st, 2015"
          },
          title: "Title",
          starsRating: "3",
          body: "This is the body."
        }, {
          author: {
            name: "Bob Smith",
            description: "My Description",
            postNumber: "1000",
            postedAt: "July 1st, 2015"
          },
          title: "Title",
          starsRating: "3",
          body: "This is the body."
        }]
      };

      _fs2.default.readFile(_path2.default.resolve('src/views/sourceReview.html'), function (err, data) {
        if (err) {
          res.status(404).send('Not found');
        } else {
          var source = data.toString();
          var template = _handlebars2.default.compile(source);
          var html = template(context);

          res.send(html);
        }
      });
    }

    /** PUT /:id - Update a given entity */
    // update({ password, body }, res) {
    //   for (let key in body) {
    //     if (key!=='id') {
    //       password[key] = body[key];
    //     }
    //   }
    //   res.sendStatus(204);
    // },

    /** DELETE /:id - Delete a given entity */
    // delete({ password }, res) {
    //   db.models.password.splice(db.models.password.indexOf(password), 1);
    //   res.sendStatus(204);
    // }

  });
};
//# sourceMappingURL=display-review.js.map