import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createJobPosting } from "../services/api";
import { toast } from "react-toastify";

const PostJob = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // State to hold all form inputs
  const [formData, setFormData] = useState({
    title: "",
    companyName: "",
    location: "",
    salary: "",
    jobType: "Full-Time (On-Site)", // Default value matching your backend Schema EXACTLY
    description: "",
    qualifications: "",
  });

  // Universal change handler for inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleData = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Convert salary to a Number before sending
      const payload = {
        ...formData,
        salary: Number(formData.salary),
      };

      await createJobPosting(payload);
      toast.success("Job posted successfully!");
      navigate("/"); // Redirect to home page after posting
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Failed to post job.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="mb-4 fw-bold">Post a Job</h2>
      <div className="card shadow-sm border-light p-4">
        <form onSubmit={handleData}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Job Title:</label>
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="e.g., Cloud Architect"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label fw-semibold">Company Name:</label>
              <input
                type="text"
                name="companyName"
                className="form-control"
                placeholder="e.g., TechCorp"
                value={formData.companyName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6 mt-3 mt-md-0">
              <label className="form-label fw-semibold">Location:</label>
              <input
                type="text"
                name="location"
                className="form-control"
                placeholder="e.g., Remote or City, State"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label fw-semibold">Salary:</label>
              <input
                type="number"
                name="salary"
                className="form-control"
                placeholder="e.g., 120000"
                value={formData.salary}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6 mt-3 mt-md-0">
              <label className="form-label fw-semibold">Job Type:</label>
              <select
                name="jobType"
                className="form-select"
                value={formData.jobType}
                onChange={handleChange}
                required
              >
                <option value="Full-Time (On-Site)">Full-Time (On-Site)</option>
                <option value="Part-Time (On-Site)">Part-Time (On-Site)</option>
                <option value="Full-Time (Remote)">Full-Time (Remote)</option>
                <option value="Part-Time (Remote)">Part-Time (Remote)</option>
              </select>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Job Description:</label>
            <textarea
              name="description"
              className="form-control"
              rows="4"
              placeholder="Describe the role and responsibilities..."
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold">Qualifications:</label>
            <textarea
              name="qualifications"
              className="form-control"
              rows="4"
              placeholder="List qualifications (Separate each with a new line for proper formatting)..."
              value={formData.qualifications}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary py-2 fw-bold"
            disabled={loading}
          >
            {loading ? "Posting..." : "Post Job"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostJob;
