import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <Link className="navbar-brand mx-3" to="/"><i className='fas fa-hospital'></i> HMS</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/"><i className='fas fa-home'></i> Home</Link>
          </li>
          <li className="nav-item dropdown mx-2">
            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
              <i className='fas fa-user'></i> Patient
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/create-patient">Create Patient</Link>
              <Link className="dropdown-item" to="/edit-patient">Edit Patient</Link>
            </div>
          </li>
          <li className="nav-item dropdown mx-2">
            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-expanded="false">
              <i className='fas fa-stethoscope'></i> Doctor
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown2">
              <Link className="dropdown-item" to="/create-doctor">Create Doctor</Link>
              <Link className="dropdown-item" to="/edit-doctor">Edit Doctor</Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item text-danger" to="/delete-doctor">Delete Doctor</Link>
            </div>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/appointments"><i className='fas fa-calendar-check'></i> Appointments</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation;