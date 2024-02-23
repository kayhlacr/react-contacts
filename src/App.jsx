import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>React Contacts</h1>
      <div className="contact-card">
        <h3>Jenny Smith</h3>
        <p>Phone: 808-867-5309</p>
        <p>Email: jenny@gmail.com</p>
      </div>
    </>
  );
}

export default App;
