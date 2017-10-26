/**
 * AuthController
 *
 * @module      :: Controller
 * @description	:: Provides the base authentication
 *                 actions used to make waterlock work.
 *
 * @docs        :: http://waterlock.ninja/documentation
 */
 // var bcrypt = require('bcryptjs');
 // var salt = bcrypt.genSaltSync(10);
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
      criteria = { email: params.newRegistration.email },
      scopeKey = def.email !== undefined ? 'email' : 'username';

      // console.log (' params.newRegistration.email: '+ params.newRegistration.email);
      console.log (' params.newRegistration.password: '+ params.newRegistration.password);
    var attr = {
      password: params.newRegistration.password,
      email: params.newRegistration.email
    }

    waterlock.engine.findAuth(criteria, function(err, user) {
      if(err)
        return res.badRequest("error:"+err);
      else if (user)
        return res.badRequest("User already exists");
      else {
        waterlock.engine.findOrCreateAuth(criteria, attr, function(err, user) {
          if (err)
            return res.badRequest(err);

          // console.log ('id: '+user.id);
          // console.log ('EMAIL: '+user.auth.email);
          // console.log ('pass deleted: '+user.auth.password);
          delete user.password;

          return Company.create({
            name: params.newRegistration.companyFullName,
            acronym: params.newRegistration.companyAcronym
          })
          .then(function(company){
            // console.log ('company id: '+company.id);
            return Person.create({
              // user: user.id,
              firstName: params.newRegistration.firstName,
              lastName: params.newRegistration.lastName,
              email: params.newRegistration.email,
              company: company.id,
              // privilege: 'admin'
            })
            .then(function(person){
              // console.log ('company id: '+company.id);
              // console.log ('company id: '+company.id);
              // console.log ('company id: '+user.id);
              return CompanyToUser.create({
                user: user.id,
                company: company.id,
                person: person.id,
                privilege: 'admin'
              });

              // return user.save();
            })
            .then(function(companyToUser){
              user.auth.password = params.newRegistration.password;
              // console.log ('pass to be saved saved: '+user.auth.password );
              return user.save(function(error) {
                  if(error) {
                    console.log ('user error: '+error);
                      // do something with the error.
                  } else {
                      return user;
                  }
              });
            })
          })
          .then(function(){
            // console.log ('companyToUser id: '+companyToUser.id);
            console.log ('finished with user: '+user.id);
            console.log ('finished creation: ');
            return res.ok(user);
          }).catch(function (err) {
            // catch any exception problem up to this point
            console.log("Serious problem during company creation", err);
            throw new Error('could not create company: '+err);
          });



          // Person.create({
          //   user: user.id,
          //   firstName: params.newRegistration.firstName,
          //   lastName: params.newRegistration.lastName,
          //   email: params.newRegistration.email
          // })
          // .then(function(person){
          //   // console.log ('person id: '+person.id);
          //   // console.log ('person email: '+person.email);
          //   user.person = person.id;
          //   user.auth.password = params.newRegistration.password;
          //   // console.log ('pass to be saved saved: '+user.auth.password );
          //   return user.save(function(error) {
          //       if(error) {
          //         console.log ('user error: '+error);
          //           // do something with the error.
          //       } else {
          //           // value saved!
          //           // req.send(user);
          //           // console.log ('pass saved: '+user.auth.password );
          //           // console.log ('user person updated: '+user.person );
          //           return user;
          //       }
          //   });
          //   // return user.save();
          // }).then(function(person){
          //   // console.log ('updatedUser id: '+updatedUser.id);
          //   return Company.create({
          //     name: params.newRegistration.companyFullName,
          //     acronym: params.newRegistration.companyAcronym
          //   });
          // }).then(function(company){
          //   // console.log ('company id: '+company.id);
          //   // console.log ('company id: '+company.acronym);
          //   return CompanyToUser.create({
          //     user: user.id,
          //     company: company.id,
          //     privilege: 'admin'
          //   });
          // }).then(function(companyToUser){
          //   // console.log ('companyToUser id: '+companyToUser.id);
          //   // console.log ('finished creation: ');
          //   return res.ok(user);
          // }).catch(function (err) {
          //   // catch any exception problem up to this point
          //   console.log("Serious problem during company creation", err);
          //   throw new Error('could not create company: '+err);
          // });
        });
      }
    });
  }

  // ,loginx: function( req, res ) {
  //   var params = req.allParams();
  //   console.log ('params.email: '+params.email);
  //   console.log ('params.password: '+params.password);
  //   var auth = {
  //     email: params.email
  //   };
  //   waterlock.engine.findAuth(auth, function(err, user){
  //     if(err){
  //       return res.json(err);
  //     }
  //     if (user) {
  //       var result = bcrypt.compareSync(params.password, user.auth.password);
  //       if(result)
  //         waterlock.cycle.loginSuccess(req, res, user);
  //       else {
  //          waterlock.cycle.loginFailure(req, res, user, {error: 'Invalid email or password'});
  //       }
  //     } else {
  //       waterlock.cycle.loginFailure(req, res, null, {error: 'user not found'});
  //     }
  //   });
  // }
});
