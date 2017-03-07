module.exports = {
  attributes: {
    name: {
      type: "string",
      required: true,
      unique: true
    },
    company:{
      model: 'Company',
      required: true
    },
    projectStages:{
      collection: 'ProjectStage',
      via: 'project',
      dominant: true
    }
  }
};
