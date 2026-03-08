const express = require('express')
const router = express.Router()

const { getAllJobs, getJobById, createJob, updateJob, deleteJob } = require('../controller/job.controller')

router.route('/')
    .get(getAllJobs)
    .post(createJob)

router.route('/:id')
    .get(getJobById)
    .put(updateJob)
    .delete(deleteJob)

module.exports = router