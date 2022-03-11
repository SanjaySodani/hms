import { Route, Routes } from 'react-router-dom';
import Appointments from './Appointments';
import CreateAppointment from './CreateAppointment';
import CreateDoctor from './CreateDoctor';
import CreatePatient from './CreatePatient';
import DeleteDoctor from './DeleteDoctor';
import EditDoctor from './EditDoctor';
import EditPatient from './EditPatient';
import Home from './Home';
import Navigation from './Navigation';

function Index() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/create-patient' element={<CreatePatient />} />
        <Route exact path='/create-appointment' element={<CreateAppointment />} />
        <Route exact path='/edit-patient' element={<EditPatient />} />
        <Route exact path='/create-doctor' element={<CreateDoctor />} />
        <Route exact path='/edit-doctor' element={<EditDoctor />} />
        <Route exact path='/delete-doctor' element={<DeleteDoctor />} />
        <Route exact path='/appointments' element={<Appointments />} />
      </Routes>
    </>
  )
}

export default Index;