module.exports = {
  attributes: {
    company:{
      model: 'Company',
      required: true
    },
    laborTransaction:{
      model: 'LaborTransaction'
    },
    purchaseTransaction:{
      model: 'PurchaseTransaction'
    },
    transactionPaidOn: {
      type: "date"
    },
    paidByPerson: {
      model: "Person"
    },
    paymentType: {
      model: "PaymentType"
    },
    total: {
      type: "integer"
    }
  }
};
