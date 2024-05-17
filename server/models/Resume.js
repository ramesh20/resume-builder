// models/Resume.js
const mongoose = require('mongoose');

// Define schema for resume
const resumeSchema = new mongoose.Schema({
  // Define properties of the resume here
  // Example:
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  // Add more properties as needed
});

// Create a model using the schema
const Resume = mongoose.model('Resume', resumeSchema);
console.log("hello")
module.exports = Resume;
