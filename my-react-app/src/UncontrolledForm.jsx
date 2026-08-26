import { useRef, useState } from "react";

function UncontrolledForm() {
  const inputRef = useRef();
  const [message, setMessage] = useState("");

  const showValue = () => {
    if (inputRef.current.value) {
      setMessage(inputRef.current.value);
    } else {
      setMessage("Nothing to display");
    }
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={showValue}>Show Value</button>
      <p>{message}</p>
      https://github.com/zappe00/Fundamentals-of-React.js
    </div>
  );
}

export default UncontrolledForm;
