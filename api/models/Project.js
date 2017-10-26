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
    assignee:{
      model: 'Person',
      required: false
    },
    projectStages:{
      collection: 'ProjectStage',
      via: 'project',
      dominant: true
    },
    totalClosingAmount:{
      type: "integer"
    },
    isArchived:{
      type: "boolean"
    }
  }
};
