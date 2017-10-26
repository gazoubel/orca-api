module.exports = {
  attributes: {
    company:{
      model: 'Company',
      required: true
    },
    firstName: {
      type: "string",
      required: true
    },
    lastName: {
      type: "string",
      required: true
    },
    projects:{
      collection: 'Project',
      via: 'assignee',
      dominant: true
    },
    paymentTransactions:{
      collection: 'PaymentTransaction',
      via: 'person',
      dominant: true
    },
    companyRelationship: {
      model: 'CompanyToUser'
    },
    // privilege: {
    //   type: "string",
    //   required: true
    // },
    // user:{
    //   model: 'User'
    // }
  }
};
