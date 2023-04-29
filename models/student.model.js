// Importing mongoose module for database operations
const mongoose = require('mongoose');


// Defining the schema for Student
const studentSchema = new mongoose.Schema({
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
  },
  education: {
    type: String,
    required: true
  },
  skills: {
    type: [String],
    required: true
  },
  appliedJobs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job'
  }],
  role: {
    type: String,
    default: STUDENT
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


const Student = mongoose.model('Student', studentSchema);

// Exporting the models
module.exports = {
  Student
};
