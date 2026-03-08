import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchJobById } from "../services/api"
import { toast } from "react-toastify"

const JobDetails = () => {
    const { id } = useParams()
    const [job, setJob] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchJob = async () => {
            try{
                const res = await fetchJobById(id)
                setJob(res.data)
                setLoading(false)
            }catch(error){
                console.error(error)
                toast.error('Failed to fetch Job Details.')
                setLoading(false)
            }
        }
        fetchJob()
    }, [id])
    
    
    if (loading || !job ) return <div className="d-flex justify-content-center align-items-center vh-100"><div className="spinner-border text-primary"></div></div>;
    
    const qualificationsList = job.qualifications.split('\n').filter(q => q.trim() !== '')

    return(
        <div>
            <h2 className="fw-bold mb-4">{job.title}</h2>
            <div className="card shadow-sm border-light p-4">
                <p><strong>Company Name: </strong>{job.companyName}</p>
                <p><strong>Location: </strong>{job.location}</p>
                <p><strong>Salary: </strong>{job.salary}</p>
                <p><strong>Job Type: </strong>{job.jobType}</p>
                <p><strong>Description: </strong>{job.description}</p>
                <div>
                    <strong>Qualifications: </strong>
                    <ol className="mt-2">
                        {qualificationsList.map((qual, index) => (
                            <li key={index}>{qual}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default JobDetails