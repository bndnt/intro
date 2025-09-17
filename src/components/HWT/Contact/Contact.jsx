import css from "./Contact.module.css";

const Contact = ({ name, phone, onDelete, id }) => {
  return (
    <>
      <div className={css.contactInfo}>
        <p className={css.contactName}>
          <span>👤</span>
          <span className={css.contactNameText}> {name}</span>
        </p>
        <p className={css.contactPhone}>
          <span>📞</span>
          <span className={css.contactPhoneText}>{phone}</span>
        </p>
      </div>
      <button
        onClick={() => onDelete(id)}
        type="button"
        className={css.contactDelBtn}
      >
        Delete
      </button>
    </>
  );
};

export default Contact;
