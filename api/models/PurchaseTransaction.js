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
    }
  }
};
