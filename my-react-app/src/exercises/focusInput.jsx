import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef();

  const focus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={focus}>Focus</button>
    </div>
  );
}
export default FocusInput;
