import { useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import dummyContacts from "./contacts";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  const [contacts, setContacts] = useState(dummyContacts);
  const [searchText, setSearchText] = useState("");
  const displayedContacts = contacts.filter((contact) => {
    const lowerCaseName = `
      ${contact.firstName} ${contact.lastName}`.toLowerCase();
    return lowerCaseName.includes(searchText.toLowerCase());
  });

  return (
    <>
      <h1>React Contacts</h1>
      <ContactForm
        onFormSubmissionHandler={(newContact) => {
          const isEmailOrPhoneInContacts = contacts.some((contact) => {
            return (
              contact.phoneNumber === newContact.phoneNumber ||
              contact.email.toLowerCase() === newContact.email.toLowerCase()
            );
          });

          if (isEmailOrPhoneInContacts) return;

          const updatedContacts = [...contacts, newContact];
          setContacts(updatedContacts);
        }}
      />
      <div>
        <input
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
          type="text"
          placeholder="search-contacts"
        />
      </div>
      <ContactList
        contacts={displayedContacts}
        onCardDeleteClick={(phoneNumber) => {
          const updatedContacts = contacts.filter((contact) => {
            return contact.phoneNumber !== phoneNumber;
          });
          setContacts(updatedContacts);
        }}
      />
    </>
  );
}

export default App;
