module.exports = {
  attributes: {
    name: {
      type: "string",
      required: true,
    },
    company:{
      model: 'Company',
      required: true
    }
  }
};
