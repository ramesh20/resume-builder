// routes/resumeRoutes.js
const express = require('express');
const router = express.Router();
const resumeController = require('../controllers/resumeController');

// Define routes for CRUD operations
router.post('/resume', resumeController.createResume);
router.get('/resume/:id', resumeController.getResume);
router.put('/resume/:id', resumeController.updateResume);
router.delete('/resume/:id', resumeController.deleteResume);

module.exports = router;
