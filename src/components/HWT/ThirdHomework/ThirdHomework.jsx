import css from "./ThirdHomework.module.css";
import ContactForm from "../ContactForm/ContactForm";
import SearchForm from "../SearchForm/SearchForm";
import ContactList from "../ContactList/ContactList";
import { useEffect, useState } from "react";
import phonebook from "../../../data/phonebook.json";
import { nanoid } from "nanoid";

const ThirdHomework = () => {
  // const [contacts, setContacts] = useState(phonebook);
  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem("phonebook-contacts");
    return storedContacts ? JSON.parse(storedContacts) : phonebook;
  });
  const [filter, setFilter] = useState("");
  const addContact = (profile) => {
    const finalProfile = { ...profile, id: nanoid() };
    setContacts([finalProfile, ...contacts]);
  };
  const handleFilter = (e) => {
    const value = e.target.value;
    setFilter(value);
  };
  const filteredContacts = contacts.filter((item) =>
    item.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );
  const DeleteContact = (contactId) => {
    // console.log(contactId);
    setContacts(contacts.filter((item) => item.id !== contactId));
  };
  useEffect(() => {
    localStorage.setItem("phonebook-contacts", JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div>
      <h3>Phonebook</h3>
      <ContactForm addContact={addContact} />
      <SearchForm filter={filter} handleFilter={handleFilter} />
      <ContactList
        filteredContacts={filteredContacts}
        onDelete={DeleteContact}
      />
    </div>
  );
};

export default ThirdHomework;
