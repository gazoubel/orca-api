module.exports = {
  attributes: {
    privilege: {
      type: "string",
      required: true
    },
    user: {
      model: 'User'
    },
    company:{
      model: 'Company'
    },
    person: {
      model: 'Person'
    },
  }
};
