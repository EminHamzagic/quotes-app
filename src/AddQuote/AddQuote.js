import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Contexts/UserContext";

export default function AddQuote() {
  const { userState, isUserLogged, setAddedNewQuote } = useContext(UserContext);
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
      const config = {
        headers: { Authorization: "Bearer " + userState.accessToken },
      };
      console.log(config);
      axios
        .get("http://localhost:4000/tags", config)
        .then((data) => setTagList(data.data));
    }
  }, [userState]);

  const handleChecked = (event) => {
    if (event.target.checked) setAddTags([...addTags, event.target.id]);
    else setAddTags(addTags.filter((tag) => tag !== event.target.id));
  };

  return (
    <div>
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
                <label htmlFor={tag}>{tag}</label>
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
                headers: {
                  Authorization: "Bearer " + userState.accessToken.toString(),
                },
              })
              .then(() => {
                setAddedNewQuote((prev) => !prev);
                setShowAddBox(!showAddBox);
              });
          }}
        >
          AddQuote
        </button>
      </div>
      <button
        style={{ height: "100%" }}
        onClick={() => {
          setShowAddBox(!showAddBox);
        }}
      >
        Add Quote
      </button>
    </div>
  );
}
