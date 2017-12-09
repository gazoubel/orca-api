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
    projectsAssignedTo:{
      collection: 'Project',
      via: 'assignee',
      dominant: true
    },
    teamMemberOf:{
      collection: 'Project',
      via: 'teamMembers'
    },
    paychecks:{
      collection: 'paycheck',
      via: 'person',
      dominant: true
    },
    companyRelationship: {
      model: 'CompanyToUser'
    },
    isActive: {
      type: "boolean",
      required: true
    },
    phone: {
      type: "string",
    },
    notes: {
      type: "string",
    },
    isAdmin: {
      type: "boolean",
      required: true
    },
    // privilege: {
    //   type: "string",
    //   required: true
    // },
    user:{
      model: 'User'
    },
    privilege:{
      model: 'Privilege'
    },
    paymentTransactions:{
      collection: 'paymentTransaction',
      via: 'paidByPerson',
      dominant: true
    }
  }
};
