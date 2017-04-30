module.exports = {
  attributes: {
    description: {
      type: "string"
    },
    company:{
      model: 'Company',
      required: true
    },
    provider:{
      model: 'Provider',
      required: false
    },
    total: {
      type: "integer",
      required: true
    },
    purchaseTransactionItems:{
      collection: 'PurchaseTransactionItem',
      via: 'purchaseTransaction',
      dominant: true
    }
  }
};
