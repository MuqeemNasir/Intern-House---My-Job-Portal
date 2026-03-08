import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary py-3 shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
          <span className="bg-light text-primary rounded px-2 py-1 me-1 fs-5">
            W
          </span>{" "}
          Intern House
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-4 text-center text-lg-start mt-3 mt-lg-0">
            <li className="nav-item">
              <NavLink className={({isActive}) => isActive ? "nav-link text-light fw-semibold" : "nav-link text-white-50"} to="/" end>
                Job Postings
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive}) => isActive ? "nav-link text-light fw-semibold" : "nav-link text-white-50"} to="/post-job">
                Post a Job
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
