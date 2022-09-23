import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import "../Css/Login.css";

export default function Login() {
  const { dispatchUserState } = useContext(UserContext);
  const { loginData, setLoginData } = useState({ username: "", password: "" });

  const submitLogin = () => {
    const { username, password } = loginData;
    const loginBody = { username, password };

    // fetch();
  };

  return (
    <div className="loginContainer">
      <h1>Login</h1>
      <input placeholder="Username" />
      <input placeholder="Password" />
      <button>Login</button>
    </div>
  );
}
