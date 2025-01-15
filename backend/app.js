const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
require('dotenv').config();


const adminRoutes = require('./routes/admin');
const jobRoutes = require('./routes/job');
const announcementRoutes = require('./routes/announcements');

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/admin', adminRoutes);
app.use('/api/job', jobRoutes);
app.use('/api/announcements', announcementRoutes);

app.get('/', (req, res) => {
    res.send('HireSetu Backend Running');
});


module.exports = app;
