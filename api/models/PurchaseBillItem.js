module.exports = {
  attributes: {
    // name: {
    //   type: "string"
    // },
    purchaseBill:{
      model: 'PurchaseBill',
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
