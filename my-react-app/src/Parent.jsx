import { useState } from "react";

function Display(props) {
  return <h1>Number: {props.number}</h1>;
}

function IncrementButton(props) {
  return <button onClick={props.increment}>Increment</button>;
}

function Parent() {
  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber(number + 1);
  };

  return (
    <div>
      <Display number={number} />
      <IncrementButton increment={increment} />
    </div>
  );
}

export default Parent;
