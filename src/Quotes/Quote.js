import QuoteBody from "./QuoteBody";
import "../Css/Quote.css";

export default function Quote({ props }) {
  // console.log(props);
  return (
    <div className="quoteContainer">
      <QuoteBody data={props} />
    </div>
  );
}
