import { useState } from "react";

function AddTask({ addTask }) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input !== "") {
      addTask(input);
      setInput("");
    }
  };

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default AddTask;
