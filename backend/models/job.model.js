const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Job title is required'],
    },
    companyName: {
        type: String,
        required: [true, 'Company name is required'],
    },
    location: {
        type: String,
        required: [true, 'Location is required'],
    },
    salary: {
        type: Number,
        required: [true, 'Salary is required'],
    },
    jobType: {
        type: String,
        enum: ['Full-Time (On-Site)', 'Part-Time (On-Site)', 'Full-Time (Remote)', 'Part-Time (Remote)'],
        required: [true, 'Job Type is required']
    },
    description: {
        type: String,
        required: [true, 'Job description is required']
    },
    qualifications: {
        type: String,
        required: [true, 'Qualifications are required']
    }
}, {timestamps: true})

const Job = mongoose.model('Job', jobSchema)

module.exports = Job