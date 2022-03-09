import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useState } from 'react';

function CreatePatient() {

  const patients = 'https://61a32591014e1900176dead9.mockapi.io/patients';
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  let [status, setStatus] = useState(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      contact: "",
      age: ""
    },
    validationSchema: Yup.object({
      name: Yup.string().max(20, 'Must be 20 characters or less').required("Name is required"),
      address: Yup.string().max(30, 'Must be 30 characters or less').required("Address if required"),
      contact: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required("Contact is required"),
      age: Yup.number("Must be a number").required("Age is required").min(0, "Must be 1 or older").max(100, 'Must be equal or less than 100')
    }),
    onSubmit: (values) => {
      setStatus(<div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>);

      axios.post(patients, {
        name: values.name,
        address: values.address,
        contact: values.contact,
        age: values.age
      }).then((res) => {
        setStatus(<div className='text-success'>Patient created!</div>);
        setTimeout(()=>{setStatus(null)}, 3000);
      });
    }
  });

  return (
    <div className="container my-4">
      <div className="row row-cols-1 row-cols-lg-2">
        <div className="col">
          <h3 className="text-monospace">Create Patient</h3>
          <div className="form-group my-4">
            <input value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} id="name" name="name" type="text" placeholder="Name" className="form-control mt-3" style={{ fontSize: "20px" }} />
            {formik.touched.name && formik.errors.name ? <p className='text-danger'>{formik.errors.name}</p> : null}

            <input value={formik.values.address} onChange={formik.handleChange} onBlur={formik.handleBlur} id="address" name="address" type="text" placeholder="Address" className="form-control mt-3" style={{ fontSize: "20px" }} />
            {formik.touched.address && formik.errors.address ? <p className='text-danger'>{formik.errors.address}</p> : null}

            <input value={formik.values.contact} onChange={formik.handleChange} onBlur={formik.handleBlur} id="contact" name="contact" type="text" placeholder="Contact" className="form-control mt-3" style={{ fontSize: "20px" }} />
            {formik.touched.contact && formik.errors.contact ? <p className='text-danger'>{formik.errors.contact}</p> : null}

            <input value={formik.values.age} onChange={formik.handleChange} onBlur={formik.handleBlur} id="age" name="age" type="number" placeholder="Age" className="form-control mt-3" style={{ fontSize: "20px" }} />
            {formik.touched.age && formik.errors.age ? <p className='text-danger'>{formik.errors.age}</p> : null}

            <button type="button" className="btn btn-primary btn-lg mt-4" onClick={formik.handleSubmit}>Submit</button>
          </div>
          {status}
        </div>
      </div>
    </div>
  )
}

export default CreatePatient;