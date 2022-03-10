import { Link } from 'react-router-dom';
import doctorImage from './doctor-image.png';

function Home() {
  return (
    <div className="container my-4">
      <div className="row row-cols-1 row-cols-md-2">
        <div className="col">
          <h3 className="text-monospace">Hospital Management System</h3>
          <p className="text-muted">
            This app uses ReactJs, ExpressJs, MongoDB and Bootstrap. App is maily focused
            on the functionalities e.g. creating and editing patients and doctors, creating
            some appointments and checking out the bill.
          </p>
          <p style={{ fontSize: "18px" }}>
            Please use the below buttons to create patients and appointments and use the links in 
            Navigation for more.
          </p>
          <div className='my-4'>
            <Link to='/create-patient' className='btn btn-outline-primary text-monospace btn-lg my-2 mr-2'>Create Patient</Link>
            <Link to='/create-appointment' className='btn btn-lg btn-success text-monospace my-2'>Create Appointment</Link>
          </div>
        </div>
        <div className="col">
          <img src={doctorImage} className="img-fluid" />
        </div>
      </div>
    </div>
  )
}

export default Home;