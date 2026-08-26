import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleValidation = (event) => {
    event.preventDefault();

    if (email.includes("@") && password.length >= 6) {
      setMessage("Login successful!");
    } else {
      setMessage("Invalid email or password.");
    }
  };

  return (
    <form onSubmit={handleValidation}>
      <h1>Login</h1>

      <input
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <input
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <button type="submit">Login</button>

      <h2>{message}</h2>
    </form>
  );
}

export default LoginForm;
