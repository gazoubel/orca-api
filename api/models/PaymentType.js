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
    // purchaseBills:{
    //   collection: 'PurchaseBill',
    //   via: 'paymentType',
    //   dominant: true
    // }
  }
};
