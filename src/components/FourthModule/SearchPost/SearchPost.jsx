import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const INITIAL_VALUES = {
  searchTerm: "",
};
const FormSchema = Yup.object().shape({
  searchTerm: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long")
    .required("required"),
});
const SearchPost = ({ onSearch }) => {
  const handleSubmit = (values, actions) => {
    onSearch(values.searchTerm);
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={handleSubmit}
        validationSchema={FormSchema}
      >
        <Form>
          <label>
            <Field name="searchTerm" type="text" placeholder="Search " />
            <ErrorMessage name="searchTerm" component="span" />
          </label>

          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchPost;
