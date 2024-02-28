import "./ContactForm.css";
import { useState } from "react";
import MaskedInput from "react-text-mask";

export default function ContactForm({ onFormSubmissionHandler }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  return (
    <form className="form-container">
      <label>
        First Name:{" "}
        <input
          type="text"
          className="form-input"
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
          className="form-input"
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
          className="form-input"
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
          className="form-input"
          pattern=".+@example\.com"
          onChange={(event) => {
            const value = event.target.value;
            setEmail(value);
          }}
        ></input>
      </label>
      <button
        className="form-button"
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          const newContact = { firstName, lastName, phoneNumber, email };
          onFormSubmissionHandler(newContact);
        }}
      >
        Create Contact
      </button>
    </form>
  );
}
