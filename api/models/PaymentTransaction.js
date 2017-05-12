module.exports = {
  attributes: {
    description: {
      type: "string"
    },
    company:{
      model: 'Company',
      required: true
    },
    // total: {
    //   type: "integer",
    //   required: true
    // },
    paymentTransactionItems:{
      collection: 'PaymentTransactionItem',
      via: 'paymentTransaction',
      dominant: true
    }
  }
};
