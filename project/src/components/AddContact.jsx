import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddContact({ addContact }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: Date.now().toString(),
      name,
      phone,
      email,
      address,
    };

    addContact(newContact);

    navigate("/contacts");
  };

  return (
    <div>
      <h1>Add Contact</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <br />

        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
        <br />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />

        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
        <br />

        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
}

export default AddContact;
