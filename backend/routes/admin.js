const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

const router = express.Router();

// Admin Login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const admin = await Admin.findOne({ username });
        if (!admin) return res.status(404).send('Admin not found');

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) return res.status(401).send('Invalid credentials');

        const token = jwt.sign({ id: admin._id }, 'your_secret_key', { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
