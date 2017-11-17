module.exports = {
  attributes: {
    name: {
      type: "string",
      required: true,
    },
    company:{
      model: 'Company',
      required: true
    },
    people:{
      collection: 'Person',
      via: 'privilege',
      dominant: true
    },
    displayAdminTab: {
      type: "boolean"
    },
  }
  // ,
  //
  // validationMessages: {
  //   name: {unique: 'already exists'}
  // }
};
