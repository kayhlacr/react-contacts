import "./ContactForm.css";
import { useState } from "react";
import MaskedInput from "react-text-mask";

export default function ContactForm({ onFormSubmissionHandler }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  return (
    <form
      className="form-container"
      onSubmit={(event) => {
        event.preventDefault();
        const newContact = { firstName, lastName, phoneNumber, email };
        onFormSubmissionHandler(newContact);
      }}
    >
      <label>
        First Name:{" "}
        <input
          type="text"
          className="form-input"
          onChange={(event) => {
            const value = event.target.value;
            setFirstName(value);
          }}
          required
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
          required
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
          pattern="\d{3}-\d{3}-\d{4}"
          onChange={(event) => {
            const value = event.target.value;
            setPhoneNumber(value);
          }}
          required
        />
      </label>
      <label>
        Email Address:{" "}
        <input
          type="email"
          className="form-input"
          onChange={(event) => {
            const value = event.target.value;
            setEmail(value);
          }}
          required
        ></input>
      </label>
      <button className="form-button" type="submit">
        Create Contact
      </button>
    </form>
  );
}
