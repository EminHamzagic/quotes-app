import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";

export default function AddQuote() {
  const { userState, isUserLogged, setAddedNewQuote, setTagsList } =
    useContext(UserContext);
  const [showAddBox, setShowAddBox] = useState(false);
  const [tagList, setTagList] = useState([]);
  const [addTags, setAddTags] = useState([]);
  const [quoteData, setQuoteData] = useState({
    content: "",
    author: "",
  });

  const checkBoxRef = useRef();

  useEffect(() => {
    if (isUserLogged()) {
      const config = {
        headers: { Authorization: "Bearer " + userState.accessToken },
      };
      axios.get("http://localhost:4000/tags", config).then((data) => {
        setTagList(data.data);
        setTagsList(data.data);
      });
    }
  }, [userState]);

  const handleChecked = (event) => {
    console.log(checkBoxRef.current.checked);
    if (event.target.checked) {
      if (addTags.length === 0) setAddTags([event.target.id]);
      else setAddTags((prevTags) => [...prevTags, event.target.id]);
    } else setAddTags(addTags.filter((tag) => tag !== event.target.id));
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
                  ref={checkBoxRef}
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
            axios
              .post(
                "http://localhost:4000/quotes",
                {
                  content: quoteData.content,
                  author: quoteData.author,
                  tags: addTags,
                },
                {
                  headers: {
                    Authorization: "Bearer " + userState.accessToken.toString(),
                  },
                }
              )
              .then(() => {
                setAddedNewQuote((prev) => !prev);
                setShowAddBox(!showAddBox);
                checkBoxRef.current.checked = false;
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
