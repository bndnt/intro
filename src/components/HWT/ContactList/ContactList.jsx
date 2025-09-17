import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ filteredContacts, onDelete }) => {
  return (
    <div>
      <ul className={css.contactList}>
        {filteredContacts.map((item) => (
          <li key={item.id} className={css.contactBlock}>
            <Contact
              name={item.name}
              phone={item.number}
              id={item.id}
              onDelete={onDelete}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
