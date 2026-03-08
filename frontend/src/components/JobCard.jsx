import { Link } from "react-router-dom"

const JobCard = ({job, onDelete}) => {
    return (
        <div className="card h-100 shadow-sm border">
            <div className="card-body d-flex flex-column">
                <h4 className="card-title fw-semibold mb-3">{job.title}</h4>
                <p className="card-text mb-2"><strong>Company Name: </strong>{job.companyName}</p>
                <p className="card-text mb-2"><strong>Location: </strong>{job.location}</p>
                <p className="card-text mb-4"><strong>Job Type: </strong>{job.jobType}</p>

                <div className="mt-auto d-flex gap-3">
                    <Link to={`/jobs/${job._id}`} className="btn btn-primary flex-fill fw-semibold py-2">See Details</Link>
                    <button onClick={() => onDelete(job._id)} className="btn btn-danger flex-fill fw-semibold py-2">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default JobCard