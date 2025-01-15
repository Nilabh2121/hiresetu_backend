const express = require('express');
const router = express.Router();
const Announcement = require('../models/Announcement');

// Add a new announcement
router.post('/add', async (req, res) => {
    try {
        const announcement = new Announcement(req.body);
        await announcement.save();
        res.status(201).json({ message: 'Announcement added successfully', announcement });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Fetch all announcements
router.get('/', async (req, res) => {
    try {
        const announcements = await Announcement.find().sort({ createdAt: -1 });
        res.status(200).json(announcements);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
