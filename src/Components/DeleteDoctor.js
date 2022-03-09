import { useState, useEffect } from 'react';
import axios from 'axios';

function DeleteDoctor() {

  const doctorsURL = 'https://61a32591014e1900176dead9.mockapi.io/doctors';
  let [status, setStatus] = useState(null);
  let [doctorId, setDoctorId] = useState("");
  let [dataList, setDataList] = useState(<div className="spinner-border text-primary" role="status">
    <span className="sr-only">Loading...</span>
  </div>);

  let handleSelectPatient = (event) => {
    if (event.target.value !== "") {
      setDoctorId(event.target.value);
    } else {
      setDoctorId("");
    }
  }

  let handleDeleteDoctor = () => {
    if (window.confirm("Are you sure?")) {
      setStatus(<div className="spinner-border text-danger" role="status">
        <span className="sr-only">Loading...</span>
      </div>);

      axios.delete(`${doctorsURL}/${doctorId}`).then(() => {
        getData();
        setDoctorId("");
        setStatus(<div className='text-danger'>Doctor deleted!</div>);
        setTimeout(() => { setStatus(null) }, 3000);
      });
    }
  }

  let getData = () => {
    axios.get(doctorsURL).then((res) => {
      let doctors = res.data;
      setDataList(<div className='my-3'>
        <label htmlFor="doctors">Choose a doctor to delete:</label>
        <select name="doctors" id="doctors" className='form-control' onChange={handleSelectPatient}>
          <option value="">select</option>
          {doctors.map((doctor) => {
            return (<option key={doctor.dId} value={doctor.dId}>{doctor.dName}</option>)
          })}
        </select>
      </div>);
    })
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container my-4">
      <div className="row row-cols-1 row-cols-lg-2">
        <div className="col">
          <h3 className="text-monospace">Delete Doctor</h3>
          {dataList}
          {doctorId === "" ? null :
            <div className='my-4'>
              <button type='button' className='btn btn-lg btn-danger' onClick={handleDeleteDoctor}>Delete</button>
            </div>
          }
          {status}
        </div>
      </div>
    </div>
  )
}

export default DeleteDoctor;