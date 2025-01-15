const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

// Add a new job
router.post('/add', async (req, res) => {
    try {
        const job = new Job(req.body);
        await job.save();
        res.status(201).json({ message: 'Job added successfully', job });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Fetch all jobs without applying limit or pagination in the backend
router.get('/', async (req, res) => {
    try {
        // Fetch all jobs without any limit or pagination
        const jobs = await Job.find().sort({ createdAt: -1 }); // You can change sorting as needed
        const totalJobs = jobs.length; // Get the total number of jobs
        const jobsPerPage = 10; // Define how many jobs to display per page on the frontend
        const totalPages = Math.ceil(totalJobs / jobsPerPage); // Calculate the total number of pages
        const currentPage = req.query.page || 1; // Default to page 1 if not specified

        // Send back all jobs, total jobs, total pages, and current page as JSON
        res.status(200).json({
            jobs,
            totalJobs,
            totalPages,
            currentPage,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching jobs", error });
    }
});


// Delete a job
router.delete('/:id', async (req, res) => {
    try {
        await Job.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Job deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
