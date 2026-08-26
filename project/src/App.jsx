import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ContactList from "./components/ContactList";
import AddContact from "./components/AddContact";
import ContactDetails from "./components/ContactDetails";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import initialContacts from "./data/initialContacts";

//GITHUB LINK!!!!!!!
//https://github.com/zappe00/Fundamentals-of-React.js

function App() {
  const [contacts, setContacts] = useState(initialContacts);

  useEffect(() => {
    console.log("Contacts updated", contacts);
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/add" element={<AddContact addContact={addContact} />} />

        <Route path="/contacts" element={<ContactList contacts={contacts} />} />

        <Route
          path="/contacts/:id"
          element={<ContactDetails contacts={contacts} />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
