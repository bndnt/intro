import css from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={css.contactBlock}>
      <div className={css.contactInfo}>
        <p className={css.contactName}></p>
        <p className={css.contactPhone}></p>
      </div>
      <button className={css.contactDelBtn}>Delete</button>
    </div>
  );
};

export default Contact;
