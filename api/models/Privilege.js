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
    company_administration: {
      type: "boolean"
    },
  }
  // ,
  //
  // validationMessages: {
  //   name: {unique: 'already exists'}
  // }
};
