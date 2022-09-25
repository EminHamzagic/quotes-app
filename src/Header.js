import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

  useEffect(() => {
    if (isUserLogged()) {
      axios
        .get("http://localhost:4000/tags", {
          headers: { Authorization: "Bearer " + userState.accessToken },
        })
        .then((data) => setTagList(data.data));
    }
  }, [userState]);

  const handleChecked = (event) => {
    if (event.target.checked) setAddTags([...addTags, event.target.id]);
    else setAddTags(addTags.filter((tag) => tag !== event.target.id));
  };

  return (
    <div className="header">
      {isUserLogged() && (
        <div
          style={{ display: !showAddBox ? "none" : "flex" }}
          className="addQuoteBox"
        >
          <label>Content</label>
          <textarea
            onChange={(e) => {
              setQuoteData({ ...quoteData, content: e.target.value });
            }}
          />
          <label>Author</label>
          <input
            onChange={(e) => {
              setQuoteData({ ...quoteData, author: e.target.value });
            }}
            type="text"
          />
          <label>Tags</label>
          <div className="tagsContainer">
            {tagList.map((tag) => {
              return (
                <div key={tag}>
                  <input
                    id={tag}
                    onChange={(e) => {
                      handleChecked(e);
                    }}
                    type="checkbox"
                  />
                  <label>{tag}</label>
                </div>
              );
            })}
          </div>
          <button
            style={{ backgroundColor: "rgb(47, 47, 66)" }}
            onClick={() => {
              setQuoteData({ ...quoteData, tags: addTags });
              axios
                .post("http://localhost:4000/quotes", quoteData, {
                  headers: { Authorization: userState.accessToken },
                })
                .then((d) => console.log(d));
            }}
          >
            AddQuote
          </button>
        </div>
      )}
      {isUserLogged() && (
        <button
          onClick={() => {
            setShowAddBox(!showAddBox);
          }}
        >
          Add Quote
        </button>
      )}
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
