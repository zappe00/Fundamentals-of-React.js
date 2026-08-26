import { useParams } from "react-router-dom";

function ContactDetails({ contacts }) {
  const { id } = useParams();

  const contact = contacts.find((contact) => contact.id === id);

  if (!contact) {
    return <h1>Not found</h1>;
  }

  return (
    <div>
      <h1>{contact.name}</h1>

      <p>Phone: {contact.phone}</p>
      <p>Email: {contact.email}</p>
      <p>Address: {contact.address}</p>
    </div>
  );
}

export default ContactDetails;
