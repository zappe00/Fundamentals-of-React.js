import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/add">Add Contact</Link>
      <Link to="/contacts">Contacts</Link>
    </nav>
  );
}

export default Navbar;
