import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";
import PostJob from "./pages/PostJob";

function App() {
  return (
    <Router>
      <Navbar />

      <div className="container mt-4 mb-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
          <Route path="/post-job" element={<PostJob />} />
        </Routes>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
  );
}

export default App;
