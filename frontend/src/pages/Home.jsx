import { useEffect, useState } from "react"
import { fetchAllJobs, removeJob } from "../services/api"
import { toast } from "react-toastify"
import JobCard from "../components/JobCard"

const Home = () => {
    const [jobs, setJobs] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    const [loading, setLoading] = useState(true)

    const loadJobs = async() => {
        try{
            const res = await fetchAllJobs()
            setJobs(res.data)
            setLoading(false)
        }catch(error){
            console.error(error)
            toast.error("Failed to fetch jobs. Make sure the backend is running!")
            setLoading(false)
        }
    }

    useEffect(() => {
        loadJobs()
    }, [])

    const handleDelete = async(id) => {
        try{
            await removeJob(id)
            setJobs(jobs.filter(job => job._id !== id))
            toast.success('Your Job Posting Deleted Successfully')
        }catch(error){
            toast.error('Failed to delete the job posting.')
        }
    }

    const filteredJobs = jobs.filter(job => job.title.toLowerCase().includes(searchQuery.toLowerCase()))

    if (loading) return <div className="d-flex justify-content-center align-items-center vh-100"><div className="spinner-border text-primary"></div></div>;

    return(
        <div>
            <input type="text" className="form-control form-control-lg mb-4" placeholder="Search by Job Title..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />

            <h2 className="mb-4 fw-bold">All Jobs</h2>
            <div className="row g-4">
                {filteredJobs.length > 0 ? (
                    filteredJobs.map(job => (
                        <div className="col-12 col-md-6 col-lg-4" key={job._id}>
                            <JobCard job={job} onDelete={handleDelete} />
                        </div>
                    ))
                ) : (
                    <p className="text-muted">No Jobs Found.</p>
                )}
            </div>
        </div>
    )
}

export default Home