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
    laborTransactionItems:{
      collection: 'LaborTransactionItem',
      via: 'laborTransaction',
      dominant: true
    },
    paymentTransactions:{
      collection: 'PaymentTransaction',
      via: 'laborTransaction',
      dominant: true
    }
  }
};
