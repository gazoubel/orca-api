module.exports = {
  attributes: {
    company:{
      model: 'Company',
      required: true
    },
    firstName: {
      type: "string",
      required: true
    },
    lastName: {
      type: "string",
      required: true
    },
    user:{
      model: 'User'
    }
  }
};
