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
    paymentTransactions:{
      collection: 'paymentTransaction',
      via: 'paymentType',
      dominant: true
    }
    // purchaseTransactions:{
    //   collection: 'PurchaseTransaction',
    //   via: 'paymentType',
    //   dominant: true
    // }
  }
};
