import QuoteBody from "./QuoteBody";
import "../Css/Quote.css";
import QuoteScore from "./QuoteScore";

export default function Quote({ props }) {
  // console.log(props);
  return (
    <div className="quoteContainer">
      <QuoteScore data={props} />
      <QuoteBody data={props} />
    </div>
  );
}
