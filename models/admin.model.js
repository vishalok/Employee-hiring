// Importing mongoose module for database operations
const mongoose = require('mongoose');

// Defining the schema for Admin
const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});



// Creating a model for each schema
const Admin = mongoose.model('Admin', adminSchema);


// Exporting the models
module.exports = {
  Admin
};
