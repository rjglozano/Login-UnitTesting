import React, { useState } from "react";
import TextInput from "./TextInput/TextInput";
import Button from "./Button/Button";

const LoginForm = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (Username === "root" && Password === "root") {
      alert("Login successful");
    } else {
      alert("Login failed");
    }
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col">
      <TextInput
        value={Username}
        onChange={handleUsernameChange}
        placeholder="Username"
      />
      <TextInput
        value={Password}
        onChange={handlePasswordChange}
        placeholder="Password"
      />
      <Button disabled={!Username || !Password} type="submit">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
