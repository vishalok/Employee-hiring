// Importing mongoose module for database operations
const mongoose = require('mongoose');

// Defining the schema for Company
const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  companyName: {
    type: String,
    default: ''
  },
  companyEmail: {
    type: String,
    default: ''
  },
  companyPhone: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: COMPANY
  },
  location: {
    type: String,
    required: true
  },
  website: {
    type: String,
    required: true
  },
   createdAt: {
    type: Date,
    default: Date
  },
  updatedAt: {
    type: Date,
    default: () => {
        return Date.now();
    }
},
});



// Creating a model for each schema

const Company = mongoose.model('Company', companySchema);

// Exporting the models
module.exports = {
 
  Company
  
};
