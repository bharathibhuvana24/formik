import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AuthorForm = ({ initialValues, onSubmit }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    birthDate: Yup.date().required('Birth Date is required'),
    bio: Yup.string().required('Bio is required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="p-3 border rounded">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <Field name="name" type="text" className="form-control" />
          <ErrorMessage name="name" component="div" className="text-danger" />
        </div>
        <div className="mb-3">
          <label htmlFor="birthDate" className="form-label">Birth Date</label>
          <Field name="birthDate" type="date" className="form-control" />
          <ErrorMessage name="birthDate" component="div" className="text-danger" />
        </div>
        <div className="mb-3">
          <label htmlFor="bio" className="form-label">Bio</label>
          <Field name="bio" type="text" className="form-control" />
          <ErrorMessage name="bio" component="div" className="text-danger" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </Form>
    </Formik>
  );
};

export default AuthorForm;
