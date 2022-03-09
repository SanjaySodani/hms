import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useState } from 'react';

function CreateDoctor() {

  const doctorsURL = 'https://61a32591014e1900176dead9.mockapi.io/doctors';
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  let [status, setStatus] = useState(null);

  const formik = useFormik({
    initialValues: {
      dName: "",
      dContact: "",
      specialization: "",
      fees: ""
    },
    validationSchema: Yup.object({
      dName: Yup.string().max(20, 'Must be 20 characters or less').required("Name is required"),
      specialization: Yup.string().required('Specialization is required'),
      dContact: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required("Contact is required"),
      fees: Yup.number("Must be a number").required("Age is required").min(200, "Must be 200 or more").max(1000, 'Must be equal or less than 1000')
    }),
    onSubmit: (values) => {
      setStatus(<div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>);

      axios.post(doctorsURL, {
        dName: values.dName,
        specialization: values.specialization,
        dContact: values.dContact,
        fees: values.fees
      }).then(() => {
        setStatus(<div className='text-success'>Doctor created!</div>);
        setTimeout(() => { setStatus(null) }, 3000);
      });
    }
  });

  return (
    <div className="container my-4">
      <div className="row row-cols-1 row-cols-lg-2">
        <div className="col">
          <h3 className="text-monospace">Create Doctor</h3>
          <div className="form-group my-4">
            <input value={formik.values.dName} onChange={formik.handleChange} onBlur={formik.handleBlur} id="dName" name="dName" type="text" placeholder="Name" className="form-control mt-3" style={{ fontSize: "20px" }} />
            {formik.touched.dName && formik.errors.dName ? <p className='text-danger'>{formik.errors.dName}</p> : null}

            <select value={formik.values.specialization} onChange={formik.handleChange} onBlur={formik.handleBlur} id="specialization" name="specialization" className='form-control mt-3' style={{ fontSize: "20px" }}>
              <option value="">Specialization</option>
              <option value="Cardiologists">Cardiologists</option>
              <option value="Dermatologists">Dermatologists</option>
              <option value="Neurologists">Neurologists</option>
              <option value="Gynecologists">Gynecologists</option>
              <option value="Urologists">Urologists</option>
            </select>
            {formik.touched.specialization && formik.errors.specialization ? <p className='text-danger'>{formik.errors.specialization}</p> : null}

            <input value={formik.values.dContact} onChange={formik.handleChange} onBlur={formik.handleBlur} id="dContact" name="dContact" type="text" placeholder="Contact" className="form-control mt-3" style={{ fontSize: "20px" }} />
            {formik.touched.dContact && formik.errors.dContact ? <p className='text-danger'>{formik.errors.dContact}</p> : null}

            <input value={formik.values.fees} onChange={formik.handleChange} onBlur={formik.handleBlur} id="fees" name="fees" type="number" placeholder="Fees" className="form-control mt-3" style={{ fontSize: "20px" }} />
            {formik.touched.fees && formik.errors.fees ? <p className='text-danger'>{formik.errors.fees}</p> : null}

            <button type="button" className="btn btn-primary btn-lg mt-4" onClick={formik.handleSubmit}>Submit</button>
          </div>
          {status}
        </div>
      </div>
    </div>
  )
}

export default CreateDoctor;