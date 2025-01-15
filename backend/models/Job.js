const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    companyImage: { type: String, required: true }, 
    company: { type: String, required: true },
    title: { type: String, required: true },
    batch: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    applicationLink: { type: String, required: true },
    salary: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Job', jobSchema);
