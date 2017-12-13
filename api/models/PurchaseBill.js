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
    tax: {
      type: "integer"
    },
    purchaseDate: {
      type: "date"
    },
    paymentDueDate: {
      type: "date"
    },
    transactionPaidOn: {
      type: "date"
    },
    purchaseBillItems:{
      collection: 'PurchaseBillItem',
      via: 'purchaseBill',
      dominant: true
    },
    defaultProjectStage:{
      model: "ProjectStage",
      // required: true
    },
    paymentType:{
      model: "PaymentType",
      required: false
    },
    invoiceNumber: {
      type: "string"
    },
    paymentTransactions:{
      collection: 'paymentTransaction',
      via: 'purchaseBill',
      dominant: true
    }
  }
};
