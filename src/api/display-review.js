import resource from 'resource-router-middleware';
import path from 'path';


export default ({ config, db }) => resource({

  /** Property name to store preloaded entity on `request`. */
  id : 'sourceCode',

  /** For requests with an `id`, you can auto-load the entity.
   *  Errors terminate the request, success sets `req[id] = data`.
   */
   load(req, id, callback) {
    let sourceCode = id,
    err = sourceCode ? null : 'Not found';
    callback(err, sourceCode);
  },

  /** GET / - List all entities */
  index({ params }, res) {
    res.json( params ) 
  },

  /** POST / - Create a new entity */
  // create({ body }, res) {
  //   body.id = db.models.password.length.toString(36);
  //   db.models.password.push(body);
  //   res.json(body);
  // },

  /** GET /:id - Return a given entity */
  read({ sourceCode }, res) {
    // res.json( sourceCode )  
    res.sendFile(path.resolve('src/views/sourceReview.html'))
  },

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
