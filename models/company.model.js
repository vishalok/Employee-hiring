// Importing mongoose module for database operations
const mongoose = require('mongoose');

// Defining the schema for Company
const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  location: {
    type: String,
    required: true
  },
  website: {
    type: String,
    required: true
  }
});



// Creating a model for each schema

const Company = mongoose.model('Company', companySchema);

// Exporting the models
module.exports = {
 
  Company
  
};
