import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const BookForm = ({ initialValues, onSubmit }) => {
  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    author: Yup.string().required('Author is required'),
    isbn: Yup.string().required('ISBN is required'),
    publicationDate: Yup.date().required('Publication Date is required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="p-3 border rounded">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <Field name="title" type="text" className="form-control" />
          <ErrorMessage name="title" component="div" className="text-danger" />
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">Author</label>
          <Field name="author" type="text" className="form-control" />
          <ErrorMessage name="author" component="div" className="text-danger" />
        </div>
        <div className="mb-3">
          <label htmlFor="isbn" className="form-label">ISBN</label>
          <Field name="isbn" type="text" className="form-control" />
          <ErrorMessage name="isbn" component="div" className="text-danger" />
        </div>
        <div className="mb-3">
          <label htmlFor="publicationDate" className="form-label">Publication Date</label>
          <Field name="publicationDate" type="date" className="form-control" />
          <ErrorMessage name="publicationDate" component="div" className="text-danger" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </Form>
    </Formik>
  );
};

export default BookForm;

