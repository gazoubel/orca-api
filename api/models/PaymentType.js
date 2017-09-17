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
    // purchaseTransactions:{
    //   collection: 'PurchaseTransaction',
    //   via: 'paymentType',
    //   dominant: true
    // }
  }
};
