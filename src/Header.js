import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddQuote from "./AddQuote/AddQuote";
import SortByButton from "./Components/SortBy/SortByButton";
import { UserContext } from "./Contexts/UserContext";
import "./Css/Header.css";

export default function Header() {
  const { userState, isUserLogged, dispatchUserState } =
    useContext(UserContext);
  const [showAddBox, setShowAddBox] = useState(false);
  const [tagList, setTagList] = useState([]);
  const [addTags, setAddTags] = useState([]);
  const [quoteData, setQuoteData] = useState({
    content: "",
    author: "",
    tags: [],
  });

  return (
    <div className="header">
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
