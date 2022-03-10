import axios from 'axios';
import { useState, useEffect } from 'react';

function CreateAppointment() {

  const appointmentsURL = 'https://61a32591014e1900176dead9.mockapi.io/appointments';
  const doctorsURL = 'https://61a32591014e1900176dead9.mockapi.io/doctors';
  const patientsURL = 'https://61a32591014e1900176dead9.mockapi.io/patients';
  let [pName, setPName] = useState("");
  let [doctorName, setDoctorName] = useState("");
  let [time, setTime] = useState("");
  let [fees, setFees] = useState("");
  let [status, setStatus] = useState(null);
  let allDoctors = [];
  let [doctorList, setDoctorList] = useState(<div><div className="spinner-border text-primary" role="status">
    <span className="sr-only">Loading...</span>
  </div></div>);
  let [patientList, setPatientList] = useState(<div><div className="spinner-border text-primary" role="status">
    <span className="sr-only">Loading...</span>
  </div></div>);

  let handleFormSubmit = () => {
    if (pName !== "" && doctorName !== "" && time !== "") {
      setStatus(<div><div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div></div>);
      
      axios.post(appointmentsURL, {
        patientName:pName,
        doctorName: doctorName,
        doctorFees: fees,
        time: time,
        isDone: false
      }).then(()=>{
        setStatus(<p className='text-success'>Appointment made!</p>);
        setTimeout(() => { setStatus(null) }, 3000);
      });
    } else {
      setStatus(<p className='text-danger'>Please provide valid input!</p>);
      setTimeout(() => { setStatus(null) }, 3000);
    }
  }

  function findDoctor(doctor_id) {
    for (let doctor of allDoctors) {
      if (doctor.dId === doctor_id) {
        return doctor;
      }
    }
  }

  let handleDoctorChange = (event) => {
    if (event.target.value !== "") {
      let doctor = findDoctor(event.target.value);
      setDoctorName(doctor.dName);
      setFees(doctor.fees);
    } else {
      setFees("");
    }
  }

  let getData = () => {
    axios.get(patientsURL).then((res) => {
      let patients = res.data;
      setPatientList(<div className='my-3'>
        <label htmlFor="doctors">Choose a patient:</label>
        <select name="doctors" id="doctors" className='form-control'
          onChange={(e) => { setPName(e.target.value) }} style={{ fontSize: "20px" }}>
          <option value="">select</option>
          {patients.map((patient) => {
            return (<option key={patient.id} value={patient.name}>{patient.name}</option>)
          })}
        </select>
      </div>);
    });

    axios.get(doctorsURL).then((res) => {
      let doctors = res.data;
      allDoctors = doctors;
      setDoctorList(<div className='my-3'>
        <label htmlFor="doctors">Choose a doctor:</label>
        <select name="doctors" id="doctors" className='form-control'
          onChange={handleDoctorChange} style={{ fontSize: "20px" }}>
          <option value="">select</option>
          {doctors.map((doctor) => {
            return (<option key={doctor.dId} value={doctor.dId}>{doctor.dName}</option>)
          })}
        </select>
      </div>);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container my-4">
      <div className="row row-cols-1 row-cols-lg-2">
        <div className="col">
          <h3 className="text-monospace">Create Appointment</h3>
          <div className="form-group my-4">

            {patientList}
            {doctorList}
            {fees !== "" ? <p style={{ fontSize: "18px" }}>{`Doctor fees is ${fees} Rs`}</p> : null}

            <div className='form-group my-3'>
              <label htmlFor="time">Choose a time:</label>
              <input type="time" id="time" className='form-control' style={{ fontSize: "20px" }}
                value={time} onChange={(e) => { setTime(e.target.value) }} />
            </div>
            {status}
            <button type="button" className="btn btn-primary btn-lg mt-4" onClick={handleFormSubmit}>Create</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateAppointment;