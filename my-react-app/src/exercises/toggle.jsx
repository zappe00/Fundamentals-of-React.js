import { useState } from "react";

const ToggleButton = () => {
  // declare state with useState
  const [isOn, setIsOn] = useState(false);
  // toggle between "ON" and "OFF"
  return <button onClick={() => setIsOn(!isOn)}>{isOn ? "ON" : "OFF"}</button>;
};

export default ToggleButton;
