import axios from "axios";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { UserContext } from "../Contexts/UserContext";
import "../Css/quotesList.css";
import Quote from "./Quote";

export default function QuoteList() {
  const [quoteArray, setQuoteArray] = useState([]);
  const { userState, addedNewQuote } = useContext(UserContext);

  useEffect(() => {
    axios
      .get("http://localhost:4000/quotes", {
        headers: { Authorization: "Bearer " + userState.accessToken },
      })
      .then(({ data }) => {
        setQuoteArray(data.quotes);
      })
      .catch((err) => console.log(err));
  }, [addedNewQuote]);

  return (
    <div className="quoteListContainer">
      <h1 style={{ marginBottom: "80px" }}>Quotes</h1>
      {quoteArray.map((quote) => {
        return <Quote key={quote.id} props={quote} />;
      })}
    </div>
  );
}
