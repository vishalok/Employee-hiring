// Importing mongoose module for database operations
const mongoose = require('mongoose');

// Defining the schema for Job
const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
    required: true
  },
  applicants: {
    type: Array,
    default: []
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
const Job = mongoose.model('Job', jobSchema);


// Exporting the models
module.exports = {
  Job
};
