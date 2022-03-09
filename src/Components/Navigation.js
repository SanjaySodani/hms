import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <Link className="navbar-brand" to="/">HMS</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
              Patient
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/create-appointment">Create Appointment</Link>
              <Link className="dropdown-item" to="/create-patient">Create Patient</Link>
              <Link className="dropdown-item" to="/edit-patient">Edit Patient</Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-expanded="false">
              Doctor
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown2">
              <Link className="dropdown-item" to="/create-doctor">Create Doctor</Link>
              <Link className="dropdown-item" to="/edit-doctor">Edit Doctor</Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item text-danger" to="/delete-doctor">Delete Doctor</Link>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/make-bill">Make bill</Link>
          </li>
        </ul>
        <Link className="nav-link text-danger" to="/logout">Logout</Link>
      </div>
    </nav>
  )
}

export default Navigation;