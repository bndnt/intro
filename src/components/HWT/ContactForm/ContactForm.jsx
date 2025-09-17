import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const INITIAL_VALUES = {
  contactName: "",
  contactPhone: "",
};
const ContactForm = ({ addContact }) => {
  const handleOnSubmit = (values, actions) => {
    const contactsObject = {
      name: values.contactName,
      number: values.contactPhone,
    };
    console.log(values);
    addContact(contactsObject);
    actions.resetForm();
  };
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const contactSchema = Yup.object().shape({
    contactName: Yup.string()
      .min(3, "Too short")
      .max(50, "Too long")
      .required("Required"),
    contactPhone: Yup.string().matches(
      phoneRegExp,
      "Phone number is not valid"
    ),
  });
  return (
    <div className={css.formContainer}>
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={handleOnSubmit}
        validationSchema={contactSchema}
      >
        <Form className={css.form}>
          <label className={css.formLabel}>
            <span>Name</span>
            <Field type="text" placeholder="Name" name="contactName" />
            <ErrorMessage
              className={css.errorSpan}
              name="contactName"
              component="span"
            />
          </label>
          <label className={css.formLabel}>
            <span>Phone</span>
            <Field type="tel" placeholder="Phone number" name="contactPhone" />
            <ErrorMessage
              className={css.errorSpan}
              name="contactPhone"
              component="span"
            />
          </label>
          <button type="submit" className={css.searchBtn}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
