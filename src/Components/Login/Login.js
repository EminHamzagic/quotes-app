import axios from "axios";
import { useState, useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";
import "../../Css/Login.css";

export default function Login() {
  const { dispatchUserState } = useContext(UserContext);
  const [loginData, setLoginData] = useState({ username: "", password: "" });

  const submitLogin = () => {
    const { username, password } = loginData;
    const loginBody = { username, password };

    axios.post("http://localhost:4000/sessions", loginBody).then(({ data }) => {
      window.history.pushState("", "", "http://localhost:3000/");
      dispatchUserState({ type: "setToken", value: data.accessToken });
    });
  };

  return (
    <div className="loginContainer">
      <h1>Login</h1>
      <input
        onChange={(e) => {
          setLoginData({ ...loginData, username: e.target.value });
        }}
        placeholder="Username"
      />
      <input
        onChange={(e) => {
          setLoginData({ ...loginData, password: e.target.value });
        }}
        placeholder="Password"
      />
      <button onClick={submitLogin}>Login</button>
    </div>
  );
}
