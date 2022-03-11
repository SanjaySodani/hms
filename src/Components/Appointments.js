import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Appointments() {
  const appointmentsURL = 'https://61a32591014e1900176dead9.mockapi.io/appointments';
  const [appointments, setAppointments] = useState([]);
  const [status, setStatus] = useState(<div className="d-flex justify-content-center">
    <div className="spinner-border text-primary" style={{ width: "3rem", height: "3rem" }} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>);

  function getData() {
    axios.get(appointmentsURL).then((res) => {
      setAppointments(res.data);
    }).then(() => {
      setStatus(null);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  let handleAppointmentMade = (id) => {
    setStatus(<div className="d-flex justify-content-center">
      <div className="spinner-border text-primary" style={{ width: "3rem", height: "3rem" }} role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>);

    axios.put(`${appointmentsURL}/${id}`, {
      isDone: true
    }).then(() => {
      getData()
    });
  }

  let handleAppointmentDelete = (id) => {
    axios.delete(`${appointmentsURL}/${id}`).then(() => {
      getData()
    });
  }

  return (
    <div className="container my-3">
      <div className="row row-cols-1 row-cols-sm-2">
        <div className='col col-sm-8 my-2'>
          <h3 className='text-monospace'>Appointments scheduled</h3>
        </div>
        <div className="col col-sm-4 d-sm-flex justify-content-sm-end my-2">
          <Link className='btn btn-lg btn-primary' to='/create-appointment'><i className='fas fa-plus'> </i> Appointment</Link>
        </div>
      </div>
      <div className='row row-cols-1 row-cols-lg-1 justify-content-center my-3'>
        {status}
        {!appointments ? null : appointments.filter((appointment) => {
          if (!appointment.isDone) return appointment;
        }).map((appointment) => {
          return (<div key={appointment.id} className='col col-12 col-sm-10 col-md-8 col-lg-8 my-2'>
            <div className=''>
              <div className='d-flex justify-content-between '>
                <div className='d-flex p-3 flex-fill justify-content-between border border-dark border-right-0 rounded-left'>
                  <div>
                    <div>
                      <h5 className='text-monospace'>{appointment.patientName}</h5>
                    </div>
                    <div>with {appointment.doctorName}</div>
                  </div>
                  <div>
                    <div>
                      <h5 className='text-monospace'>{appointment.time}</h5>
                    </div>
                    <div>{appointment.doctorFees} Rs</div>
                  </div>
                </div>
                <div>
                  <button className='btn btn-primary btn-block' onClick={() => { handleAppointmentMade(appointment.id) }} style={{ height: "100%", borderRadius: "0 4px 4px 0" }}>
                    <i className='fas fa-check'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>)
        })}
      </div>

      <div className='row row-cols-1 row-cols-lg-1 justify-content-center my-3'>
        <hr />
        <div className='col my-2'>
          <h3 className='text-monospace'>Appointments made</h3>
        </div>
        {!appointments ? null : appointments.filter((appointment) => {
          if (appointment.isDone) return appointment;
        }).map((appointment) => {
          return (<div key={appointment.id} className='col col-12 col-sm-10 col-md-8 col-lg-8 my-2'>
            <div className=''>
              <div className='d-flex justify-content-between '>
                <div className='d-flex p-3 flex-fill justify-content-between border border-dark border-right-0 rounded-left'>
                  <div>
                    <div>
                      <h5 className='text-monospace'>{appointment.patientName}</h5>
                    </div>
                    <div>with {appointment.doctorName}</div>
                  </div>
                  <div>
                    <div>
                      <h5 className='text-monospace'>{appointment.time}</h5>
                    </div>
                    <div>{appointment.doctorFees} Rs</div>
                  </div>
                </div>
                <div>
                  <button className='btn btn-danger btn-block' onClick={() => { handleAppointmentDelete(appointment.id) }} style={{ height: "100%", borderRadius: "0 4px 4px 0" }}>
                    <i className='fas fa-times'></i>
                  </button>
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