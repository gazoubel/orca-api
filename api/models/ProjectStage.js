module.exports = {
  attributes: {
    name: {
      type: "string",
      required: true,
      // unique: true
    },
    project:{
      model: 'Project',
      required: true
    },

    previous:{
      model: 'ProjectStage'
    },
    next:{
      model: 'ProjectStage'
    },
    purchaseTransactionItems:{
      collection: 'PurchaseTransactionItem',
      via: 'projectStage',
      dominant: true
    },
    defaultPurchaseTransactions:{
      collection: 'PurchaseTransaction',
      via: 'defaultProjectStage',
      // dominant: true
    },
    paymentTransactionItems:{
      collection: 'PaymentTransactionItem',
      via: 'projectStage',
      dominant: true
    },
    predictedTotal:{
      type: "integer"
    },
    startedOn:{
      type: "date"
    },
    finishedOn:{
      type: "date"
    }

  }
};
