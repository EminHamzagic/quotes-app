import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";
import axios from "axios";

export default function QuoteScore({ data, setScr }) {
  const { userState } = useContext(UserContext);
  const percentage = Math.ceil(
    (100 / (data.upvotesCount + data.downvotesCount)) * data.upvotesCount
  );

  const addVote = (vote) => {
    return fetch(`http://localhost:4000/quotes/${data.id}/${vote}`, {
      method: "POST",
      headers: { Authorization: `Bearer ${userState.accessToken}` },
    });
  };

  const deleteVote = (vote) => {
    return fetch(`http://localhost:4000/quotes/${data.id}/${vote}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${userState.accessToken}` },
    });
  };

  const vote = (type) => {
    console.log(data.tags);
    if (data.givenVote === "upvote" && type === "downvote") {
      deleteVote("upvote").then(() =>
        addVote("downvote").then(() => setScr((prev) => !prev))
      );
    } else if (data.givenVote === "downvote" && type === "upvote") {
      deleteVote("downvote").then(() =>
        addVote("upvote").then(() => setScr((prev) => !prev))
      );
    } else {
      addVote(type).then(() => setScr((prev) => !prev));
    }
  };

  return (
    <div className="quoteScoreContainer">
      <p
        onClick={() => {
          vote("upvote");
        }}
      >
        <FontAwesomeIcon
          style={{
            color:
              data.givenVote === "upvote"
                ? "rgb(165, 165, 165)"
                : "rgb(104, 104, 104)",
          }}
          className="icon"
          icon={faCaretUp}
        />
      </p>
      <p
        className="percentage"
        style={{
          color: `hsl(${percentage ? percentage : "0"}, 100%, 50%)`,
        }}
      >
        {percentage ? percentage : "0"}%
      </p>
      <p className="votes">{data.upvotesCount + " / " + data.downvotesCount}</p>
      <p
        onClick={() => {
          vote("downvote");
        }}
      >
        <FontAwesomeIcon
          style={{
            color:
              data.givenVote === "downvote"
                ? "rgb(165, 165, 165)"
                : "rgb(104, 104, 104)",
          }}
          className="icon"
          icon={faCaretDown}
        />
      </p>
    </div>
  );
}
