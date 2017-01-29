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
  acronymExists: function(req, res) {
		var acronym = req.param("acronym") || '';

    // if (acronym=='test') {
    //   return res.ok(true);
    // } else {
    //   return res.ok(false);
    // }

		Company.findOne()
		.where({
			acronym: acronym
		})
		.then(function(company) {
			if (company) {
				return res.ok(true);
			} else {
				return res.ok(false);
			}
		});
	},
  emailExists: function(req, res) {
		var email = req.param("email") || '';
    var criteria = {email: email};
    waterlock.engine.findAuth(criteria, function(err, user) {
      if (user)
        return res.ok(true);
      else {
        return res.ok(false);
      }
    });
  },
  registerNewCompany: function(req, res) {
    var params = req.params.all(),
      def = waterlock.Auth.definition,
      criteria = { },
      scopeKey = def.email !== undefined ? 'email' : 'username';

    var attr = {
      password: params.newRegistration.password,
      email: params.newRegistration.email
    }
    // attr['email'] = params[scopeKey];


    waterlock.engine.findAuth(criteria, function(err, user) {
      if (user)
        return res.badRequest("User already exists");
      else {
        waterlock.engine.findOrCreateAuth(criteria, attr, function(err, user) {
          if (err)
            return res.badRequest(err);
          console.log ('id: '+user.id);
          delete user.password;

          Company.create({
            name: params.newRegistration.companyFullName,
            acronym: params.newRegistration.companyAcronym
          }).then(function(company){
            return CompanyToUser.create({
              user: user.id,
              company: company.id,
              privilege: 'admin'
            });
          }).then(function(companyToUser){
            console.log ('finished creation: ');
            return res.ok(user);

          });
        });
      }
    });
  }

});
