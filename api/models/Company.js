module.exports = {
  attributes: {
    name: {
      type: "string",
      required: true
    },
    acronym: {
      type: "string",
      required: true
    },
    userRelationships:{
      collection: 'CompanyToUser',
      via: 'company',
      dominant: true
    }
  }
};
