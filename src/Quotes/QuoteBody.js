import "../Css/Quote.css";

export default function QuoteBody({ data }) {
  return (
    <div className="quoteBody">
      <p>{data.content}</p>
      <p>- {data.author}</p>
    </div>
  );
}
