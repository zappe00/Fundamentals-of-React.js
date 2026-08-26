import { useState } from "react";

function NameForm() {
  // track input with useState
  const [name, setName] = useState("");

  // show alert on button click
  const showAlert = () => {
    alert(name);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <button onClick={showAlert}>Show name</button>
    </div>
  );
}

export default NameForm;
