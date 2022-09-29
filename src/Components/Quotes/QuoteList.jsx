import axios from "axios";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { PageContext } from "../../Contexts/PageContext";
import { UserContext } from "../../Contexts/UserContext";
import "../../Css/quotesList.css";
import Quote from "./Quote";

export default function QuoteList() {
  const [quoteArray, setQuoteArray] = useState([]);
  const { userState, addedNewQuote } = useContext(UserContext);
  const [changedScore, setChangedScore] = useState(false);

  const { page, setPagesNum } = useContext(PageContext);
  const { sortBy, sortDir, filterTags } = useContext(UserContext);

  useEffect(() => {
    axios
      .get(
        `http://localhost:4000/quotes?pageSize=5&page=${page}&sortBy=${sortBy}&sortDirection=${sortDir}&tags=${filterTags.toString()}`,
        {
          headers: { Authorization: "Bearer " + userState.accessToken },
        }
      )
      .then(({ data }) => {
        setPagesNum(Math.ceil(data.quotesCount / 5));
        setQuoteArray(data.quotes);
      })
      .catch((err) => console.log(err));
  }, [addedNewQuote, changedScore, page, sortBy, sortDir, filterTags]);

  return (
    <div className="quoteListContainer">
      <h1 style={{ marginBottom: "80px" }}>Quotes</h1>
      {quoteArray.map((quote, i) => {
        return (
          <Quote
            key={quote.id + i.toString()}
            updateScr={setChangedScore}
            props={quote}
          />
        );
      })}
    </div>
  );
}
