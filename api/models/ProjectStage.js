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
    purchaseBillItems:{
      collection: 'PurchaseBillItem',
      via: 'projectStage',
      dominant: true
    },
    defaultPurchaseBills:{
      collection: 'PurchaseBill',
      via: 'defaultProjectStage',
      // dominant: true
    },
    paycheckItems:{
      collection: 'paycheckItem',
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
