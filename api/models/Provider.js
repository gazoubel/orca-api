module.exports = {
  attributes: {
    name: {
      type: "string",
      required: true,
      unique: true
    },
    company:{
      model: 'Company',
      required: true
    },
    purchaseTransactions:{
      collection: 'PurchaseTransaction',
      via: 'provider',
      dominant: true
    }
  }
};
