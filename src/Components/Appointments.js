import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Appointments() {
  const appointmentsURL = 'https://61a32591014e1900176dead9.mockapi.io/appointments';
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    axios.get(appointmentsURL).then((res) => {
      setAppointments(res.data);
    })
  }, []);

  return (
    <div className="container my-3">
      <div className="row row-cols-1 row-cols-sm-2">
        <div className='col my-2'>
          <h3 className='text-monospace'>Appointments</h3>
        </div>
        <div className="col d-sm-flex justify-content-sm-end my-2">
          <Link className='btn btn-lg btn-primary' to='/create-appointment'>Appointment +</Link>
        </div>
      </div>
      <div className='row row-cols-1 row-cols-lg-1 justify-content-center my-3'>
        {appointments.map((appointment) => {
          return (<div key={appointment.id} className='col col-12 col-sm-10 col-md-8 col-lg-8 my-2'>
            <div className='card'>
              <div className='card-body'>
                <div className='d-flex justify-content-between'>
                  <div><h5>{appointment.patientName}</h5></div>  
                  <div><h6>{appointment.time}</h6></div>  
                </div>
                <div className='d-flex justify-content-between'>
                  <div>with {appointment.doctorName}</div>  
                  <div>{appointment.doctorFees} Rs</div>  
                </div>
              </div>
            </div>
          </div>)
        })}
      </div>
    </div>
  )
}

export default Appointments;