import css from "./FormikAddProfile.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const INITIAL_VALUES = {
  profileName: "",
  profilePhone: "",
  profileEmail: "",
  profileStatus: "",
  profileAvatar: "",
  profileHome: false,
};
const FormikAddProfile = ({ addProfile }) => {
  const handleSubmit = (values, actions) => {
    const profileObject = {
      name: values.profileName,
      phone: values.profilePhone,
      email: values.profileEmail,
      avatar: values.profileAvatar,
      status: values.profileStatus,
      hasPhisicalAdress: values.profileHome,
    };
    addProfile(profileObject);
    actions.resetForm();
  };
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const FormSchema = Yup.object().shape({
    profileName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long")
      .required("required"),
    profilePhone: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid!")
      .required("required"),
    profileAvatar: Yup.string(),
    profileEmail: Yup.string().email("Not valid").required("required!"),
    profileStatus: Yup.string()
      .oneOf(["online", "offline"])
      .required("required"),
    profileHome: Yup.bool(),
  });
  return (
    <div>
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={handleSubmit}
        validationSchema={FormSchema}
      >
        <Form className={css.form}>
          <label className={css.label}>
            <span>Username: </span>
            <Field name="profileName" type="text" placeholder="Name" />
            <ErrorMessage
              className={css.errorSpan}
              name="profileName"
              component="span"
            />
          </label>
          <label className={css.label}>
            <span>Phone number: </span>
            <Field name="profilePhone" type="tel" placeholder="Phone" />
            <ErrorMessage
              className={css.errorSpan}
              name="profilePhone"
              component="span"
            />
          </label>
          <label className={css.label}>
            <span>Email: </span>
            <Field name="profileEmail" type="email" placeholder="Email" />
            <ErrorMessage
              className={css.errorSpan}
              name="profileEmail"
              component="span"
            />
          </label>
          <label className={css.label}>
            <span>Avatar link: </span>
            <Field name="profileAvatar" type="text" placeholder="Avatar link" />
            <ErrorMessage
              className={css.errorSpan}
              name="profileAvatar"
              component="span"
            />
          </label>
          <p>Status: </p>
          <div className={css.radioBox}>
            <label>
              Online
              <Field
                name="profileStatus"
                type="radio"
                placeholder="Status"
                value="online"
              />
            </label>
            <br />
            <label>
              Offline
              <Field
                name="profileStatus"
                type="radio"
                placeholder="Status"
                value="offline"
              />
            </label>
            <ErrorMessage
              className={css.errorSpan}
              name="profileStatus"
              component="span"
            />
          </div>
          <label className={css.labelCheckbox}>
            <Field name="profileHome" type="checkbox" placeholder="Home" />
            <ErrorMessage
              className={css.errorSpan}
              name="profileHome"
              component="span"
            />
            <span> Has phisical adress </span>
          </label>
          <button className={css.formBtn} type="submit">
            Add New Profile
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormikAddProfile;
