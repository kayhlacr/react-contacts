import { useState } from "react";
import "./App.css";
import ContactCard from "./components/ContactCard/ContactCard";

function App() {
  return (
    <>
      <h1>React Contacts</h1>
      <ContactCard
        name={"Jenny Smith"}
        phone={"808 - 867 - 5309"}
        email={"jenny@gmail.com"}
      />
    </>
  );
}

export default App;
