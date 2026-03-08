import axios from 'axios'

const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api"

const API = axios.create({
    baseURL: API_BASE,
    headers: {'Content-Type' : 'application/json'}
})


export const fetchAllJobs = () => API.get('/jobs')
export const fetchJobById = (id) => API.get(`/jobs/${id}`)
export const createJobPosting = (jobData) => API.post('/jobs', jobData)
export const removeJob = (id) => API.delete(`/jobs/${id}`)

export default API