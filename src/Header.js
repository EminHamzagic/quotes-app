import { useContext } from "react";
import { Link } from "react-router-dom";
import AddQuote from "./Components/AddQuote/AddQuote";
import FilterQuotesBtn from "./Components/FilterQuotes/FilterQuotesBtn";
import SortByButton from "./Components/SortBy/SortByButton";
import { UserContext } from "./Contexts/UserContext";
import "./Css/Header.css";

export default function Header() {
  const { isUserLogged, dispatchUserState } = useContext(UserContext);

  return (
    <div className="header">
      {isUserLogged() && <FilterQuotesBtn />}
      {isUserLogged() && <SortByButton />}
      {isUserLogged() && <AddQuote />}
      {isUserLogged() && (
        <button
          onClick={() => {
            window.history.pushState("", "", "http://localhost:3000/login");
            dispatchUserState({ type: "clearToken" });
          }}
        >
          <Link style={{ color: "white", textDecoration: "none" }} to="/login">
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
