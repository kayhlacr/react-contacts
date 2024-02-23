import { useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import dummyContacts from "./contacts";

function App() {
  const [contacts, setContacts] = useState(dummyContacts);

  return (
    <>
      <h1>React Contacts</h1>
      <ContactList contacts={contacts} />
    </>
  );
}

export default App;
