import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";

export default function QuoteScore({ data }) {
  const { userState } = useContext(UserContext);
  const percentage = Math.ceil(
    (100 / (data.upvotesCount + data.downvotesCount)) * data.upvotesCount
  );

  const vote = (type) => {
    console.log(userState.accessToken);
    // console.log("Bearer " + userState.accessToken);
    console.log(data.upvotesCount);
    // const url = "http://localhost:4000/quotes/" + data.id + "/" + type + "vote";
    // console.log(url);
    axios
      .post(
        "http://localhost:4000/quotes/4f71adf6-b7f5-45a5-82d6-1ed37d79c2d1/upvote",
        {
          headers: { Authorization: "Bearer " + userState.accessToken },
        }
      )
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="quoteScoreContainer">
      <p
        onClick={() => {
          vote("up");
        }}
      >
        <FontAwesomeIcon className="icon" icon={faCaretUp} />
      </p>
      <p
        className="percentage"
        style={{ color: `hsl(${percentage}, 100%, 50%)` }}
      >
        {percentage}%
      </p>
      <p className="votes">{data.upvotesCount + " / " + data.downvotesCount}</p>
      <p
        onClick={() => {
          vote("down");
        }}
      >
        <FontAwesomeIcon className="icon" icon={faCaretDown} />
      </p>
    </div>
  );
}
