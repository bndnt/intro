import css from "./ThirdHomework.module.css";
import ContactForm from "../ContactForm/ContactForm";
import SearchForm from "../SearchForm/SearchForm";
import ContactList from "../ContactList/ContactList";
const ThirdHomework = () => {
  return (
    <div>
      <h3>Phonebook</h3>
      <ContactForm />
      <SearchForm />
      <ContactList />
    </div>
  );
};

export default ThirdHomework;
