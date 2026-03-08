const Job = require('../models/job.model')

const getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.find().sort({ createdAt: -1 })
        if (!jobs) {
            return res.status(404).json({ message: 'No job found.' })
        }
        res.status(200).json(jobs)
    } catch (error) {
        res.status(500).json({ message: 'Error Fetching Jobs', error: error.message })
    }
}

const getJobById = async (req, res) => {
    try {
        const job = await Job.findById(req.params.id)
        if (!job) {
            req.status(404).json({ message: 'Job not found.' })
        }
        res.status(200).json(job)
    } catch (error) {
        res.status(500).json({ message: 'Error fetching job details', error: error.message })
    }
}

const createJob = async (req, res) => {
    try {
        const newJob = new Job(req.body)
        const savedJob = await newJob.save()
        res.status(201).json(savedJob)
    } catch (error) {
        res.status(400).json({ message: 'Error posting job', error: error.message })
    }
}

const updateJob = async (req, res) => {
    try {
        const updatedJob = await Job.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        )

        if (!updatedJob) {
            return res.status(404).json({ message: 'Job not found.' })
        }

        res.status(200).json({ message: 'Job updated successfully', job: updatedJob })
    } catch (error) {
        res.status(400).json({ message: 'Error updating job', error: error.message })
    }
}

const deleteJob = async (req, res) => {
    try {
        const deletedJob = await Job.findByIdAndDelete(req.params.id)
        if (!deletedJob) {
            return res.status(404).json({ message: 'Job not found' })
        }
        res.status(200).json({ message: 'Job deleted successfully', job: deletedJob })
    } catch (error) {
        res.status(500).json({ message: 'Error deleting job', error: error.message })
    }
}



module.exports = { getAllJobs, getJobById, createJob, updateJob, deleteJob }