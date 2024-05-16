// controllers/resumeController.js
const Resume = require('../models/Resume');

// Controller functions for CRUD operations
const resumeController = {
  // Create a new resume
  createResume: async (req, res) => {
    try {
      const newResume = new Resume(req.body);
      await newResume.save();
      res.status(201).json(newResume);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Get a specific resume by ID
  getResume: async (req, res) => {
    try {
      const resume = await Resume.findById(req.params.id);
      if (!resume) {
        return res.status(404).json({ message: 'Resume not found' });
      }
      res.json(resume);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Update a resume by ID
  updateResume: async (req, res) => {
    try {
      const updatedResume = await Resume.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedResume) {
        return res.status(404).json({ message: 'Resume not found' });
      }
      res.json(updatedResume);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Delete a resume by ID
  deleteResume: async (req, res) => {
    try {
      const deletedResume = await Resume.findByIdAndDelete(req.params.id);
      if (!deletedResume) {
        return res.status(404).json({ message: 'Resume not found' });
      }
      res.json({ message: 'Resume deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = resumeController;
