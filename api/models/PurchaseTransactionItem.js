module.exports = {
  attributes: {
    // name: {
    //   type: "string"
    // },
    purchaseTransaction:{
      model: 'PurchaseTransaction',
      required: true
    },
    projectStage:{
      model: 'ProjectStage',
      required: true
    },
    total: {
      type: "integer",
      required: true
    }
  }
};
