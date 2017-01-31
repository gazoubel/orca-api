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

    waterlock.engine.findAuth(criteria, function(err, user) {
      if (user)
        return res.badRequest("User already exists");
      else {
        waterlock.engine.findOrCreateAuth(criteria, attr, function(err, user) {
          if (err)
            return res.badRequest(err);

          console.log ('id: '+user.id);
          console.log ('EMAIL: '+user.email);
          console.log ('pass: '+user.password);
          delete user.password;

          Person.create({
            user: user.id,
            firstName: params.newRegistration.firstName,
            lastName: params.newRegistration.lastName,
            email: params.newRegistration.email
          }).then(function(person){
            console.log ('person id: '+person.id);
            user.person = person.id;
            console.log ('user id: '+user.id);
            return user.save(function(error) {
                if(error) {
                  console.log ('user error: '+error);
                    // do something with the error.
                } else {
                    // value saved!
                    // req.send(user);
                    console.log ('user person updated: '+user.person );
                    return user;
                }
            });
            // return user.save();
          }).then(function(updatedUser){
            console.log ('updatedUser id: '+updatedUser.id);
            return Company.create({
              name: params.newRegistration.companyFullName,
              acronym: params.newRegistration.companyAcronym
            })
          }).then(function(company){
            console.log ('company id: '+company.id);
            return CompanyToUser.create({
              user: user.id,
              company: company.id,
              privilege: 'admin'
            });
          }).then(function(companyToUser){
            console.log ('companyToUser id: '+companyToUser.id);
            console.log ('finished creation: ');
            return res.ok(user);
          }).catch(function (err) {
            // catch any exception problem up to this point
            console.log("Serious problem during company creation", err);
            throw new Error('could not create company: '+err);
        });

          // Company.create({
          //   name: params.newRegistration.companyFullName,
          //   acronym: params.newRegistration.companyAcronym
          // }).then(function(company){
          //   return CompanyToUser.create({
          //     user: user.id,
          //     company: company.id,
          //     privilege: 'admin'
          //   });
          // }).then(function(companyToUser){
          //   console.log ('finished creation: ');
          //   return res.ok(user);
          //
          // });
        });
      }
    });
  }

});
