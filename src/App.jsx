import { useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import dummyContacts from "./contacts";
import MaskedInput from "react-text-mask";

function App() {
  const [contacts, setContacts] = useState(dummyContacts);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [Email, setEmail] = useState("");

  return (
    <>
      <h1>React Contacts</h1>
      <form>
        <label>
          First Name:{" "}
          <input
            type="text"
            onChange={(event) => {
              const value = event.target.value;
              setFirstName(value);
            }}
          />
        </label>
        <label>
          Last Name:{" "}
          <input
            type="text"
            onChange={(event) => {
              const value = event.target.value;
              setLastName(value);
            }}
          />
        </label>
        <label>
          Phone Number:{" "}
          <MaskedInput
            mask={[
              /\d/,
              /\d/,
              /\d/,
              "-",
              /\d/,
              /\d/,
              /\d/,
              "-",
              /\d/,
              /\d/,
              /\d/,
              /\d/,
            ]}
            guide={true}
            onChange={(event) => {
              const value = event.target.value;
              setPhoneNumber(value);
            }}
          />
        </label>
        <label>
          Email Address:{" "}
          <input
            type="email"
            pattern=".+@example\.com"
            onChange={(event) => {
              const value = event.target.value;
              setEmail(value);
            }}
          ></input>
        </label>
        <button
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            console.log("Submit clicked!");
          }}
        >
          Create Contact
        </button>
      </form>
      <ContactList contacts={contacts} />
    </>
  );
}

export default App;
