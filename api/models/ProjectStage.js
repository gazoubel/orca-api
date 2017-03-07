module.exports = {
  attributes: {
    name: {
      type: "string",
      required: true,
      unique: true
    },
    project:{
      model: 'Project',
      required: true
    },

    previous:{
      model: 'ProjectStage'
    },
    next:{
      model: 'ProjectStage'
    }

  }
};
