import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./Contexts/UserContext";
import "./Css/Header.css";

export default function Header() {
  const { userState, isUserLogged, dispatchUserState } =
    useContext(UserContext);

  return (
    <div className="header">
      {isUserLogged() && (
        <button
          onClick={() => {
            dispatchUserState({ type: "clearToken" });
          }}
        >
          <Link style={{ color: "white", textDecoration: "none" }} to="/">
            Logout
          </Link>
        </button>
      )}
      {!isUserLogged() && (
        <button>
          <Link style={{ color: "white", textDecoration: "none" }} to="/login">
            Login
          </Link>
        </button>
      )}
    </div>
  );
}
