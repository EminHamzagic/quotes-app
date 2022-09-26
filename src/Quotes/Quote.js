import QuoteBody from "./QuoteBody";
import "../Css/Quote.css";
import QuoteScore from "./QuoteScore";

export default function Quote({ props, updateScr }) {
  // console.log(props);
  return (
    <div className="quoteContainer">
      <QuoteScore data={props} setScr={updateScr} />
      <QuoteBody data={props} />
    </div>
  );
}
