const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const helmet = require('helmet');
const logger = require('morgan');
const cors = require('cors');

// Importing the models
const { Admin, Company, Job, Student } = require('./models');

const { PORT } = require('./configs/server.config');
const { DB_URL, DB_PROD_URL } = require('./configs/db.config');

let connectionString = DB_PROD_URL;

if(process.env.NODE_ENV !== 'production'){
    connectionString = DB_URL;
}
//Using the bodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//IIFE
(async ()=> {
    try{    
        await mongoose.connect(connectionString);
        console.log('db connected');
       // await init();
        // Calling the seedData function
    //seedData();
    }
    catch(err){
        console.error('error getting while connecting mongoDB', err);
    }

})();


// Adding some seed data
async function seedData() {
  // Create an admin user
  const admin = new Admin({
    name: 'John Doe',
    email: 'admin@example.com',
    password: 'password'
  });

  await admin.save();

  // Create a company
  const company = new Company({
    name: 'Acme Corporation',
    email: 'info@acme.com',
    location: 'New York',
    website: 'https://www.acme.com'
  });

  await company.save();

// Create a job
const job = new Job({
    title: 'Software Engineer',
    description: 'We are looking for a talented software engineer to join our team.',
    location: 'New York',
    company: company._id
    });
    
    await job.save();
    
    // Create a student
    const student = new Student({
    name: 'Jane Smith',
    email: 'jane@example.com',
    password: 'password',
    education: 'Bachelor of Science in Computer Science',
    skills: ['JavaScript', 'Node.js', 'React'],
    appliedJobs: [job._id]
    });
    
    await student.save();
    
    console.log('Seed data added successfully!');
    }
    
   
    app.listen(PORT, ()=> {
      console.log(`server is running on port: ${PORT}, please access it on http://localhost:${PORT}`)
  })