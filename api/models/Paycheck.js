module.exports = {
  attributes: {
    description: {
      type: "string"
    },
    company:{
      model: 'Company',
      required: true
    },
    person:{
      model: 'Person',
      required: true
    },
    // total: {
    //   type: "integer",
    //   required: true
    // },
    paycheckItems:{
      collection: 'PaycheckItem',
      via: 'paycheck',
      dominant: true
    },
    paymentTransactions:{
      collection: 'PaymentTransaction',
      via: 'paycheck',
      dominant: true
    }
  }
};
