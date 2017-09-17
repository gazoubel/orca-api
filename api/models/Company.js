module.exports = {
  attributes: {
    name: {
      type: "string",
      required: true
    },
    acronym: {
      type: "string",
      required: true,
      unique: true
    },
    userRelationships:{
      collection: 'CompanyToUser',
      via: 'company',
      dominant: true
    },
    stages:{
      collection: 'Stage',
      via: 'company',
      dominant: true
    },
    providers:{
      collection: 'Provider',
      via: 'company',
      dominant: true
    },
    paymentTypes:{
      collection: 'PaymentType',
      via: 'company',
      dominant: true
    },
    projects:{
      collection: 'Project',
      via: 'company',
      dominant: true
    },
    purchaseTransactions:{
      collection: 'PurchaseTransaction',
      via: 'company',
      dominant: true
    },
    paymentTransactions:{
      collection: 'PaymentTransaction',
      via: 'company',
      dominant: true
    },
    people:{
      collection: 'Person',
      via: 'company',
      dominant: true
    },
    items:{
      collection: 'Item',
      via: 'company',
      dominant: true
    },
    laborItems:{
      collection: 'LaborItem',
      via: 'company',
      dominant: true
    },
    isArchived: {
      type:'boolean'
    }
  }
};
