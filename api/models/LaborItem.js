module.exports = {
  attributes: {
    // key:{
    //   type: "string",
    //   required: true,
    //   unique: true
    // },
    name: {
      type: "string",
      required: true,
      // unique: true
    },
    company:{
      model: 'Company',
      required: true
    }
  },
  // beforeValidation : function(values,cb) {
  //   values.key = values.name+values.company.id;
  //   cb();
  // }
};
