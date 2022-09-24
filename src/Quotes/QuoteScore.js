import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function QuoteScore() {
  return (
    <div className="quoteScoreContainer">
      <p>
        <FontAwesomeIcon className="icon" icon={faCaretUp} />
      </p>
      <p>Halo</p>
      <p>
        <FontAwesomeIcon className="icon" icon={faCaretDown} />
      </p>
    </div>
  );
}
