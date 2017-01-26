/**
 * AuthController
 *
 * @module      :: Controller
 * @description	:: Provides the base authentication
 *                 actions used to make waterlock work.
 *
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = require('waterlock').waterlocked({
  /* e.g.
    action: function(req, res){

    }
  */
  register: function(req, res) {
    var params = req.params.all(),
      def = waterlock.Auth.definition,
      criteria = { },
      scopeKey = def.email !== undefined ? 'email' : 'username';

    var attr = {
      password: params.password
    }
    attr[scopeKey] = params[scopeKey];
    criteria[scopeKey] = attr[scopeKey];

    waterlock.engine.findAuth(criteria, function(err, user) {
      debugger;
      if (user)
        return res.badRequest("User already exists");
      else {
        waterlock.engine.findOrCreateAuth(criteria, attr, function(err, user) {
          if (err)
            return res.badRequest(err);
          delete user.password;
          return res.ok(user);
          // return waterlock.Auth.login(params);
        });
      }
    });
  }

});
