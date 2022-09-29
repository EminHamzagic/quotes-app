import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";
import "../../Css/Sort.css";

export default function SortByButton() {
  const { setSortBy, setSortDir } = useContext(UserContext);

  const handleByChange = (e) => {
    if (e.checked === true) {
      setSortBy(e.id);
    }
  };
  const handleDirChange = (e) => {
    if (e.checked === true) {
      setSortDir(e.id);
    }
  };

  return (
    <button className="sortBtn">
      Sort
      <div className="sortContainer">
        <div>
          <p>Sort By</p>
          <div>
            <input
              onChange={(e) => {
                handleByChange(e.target);
              }}
              id="createdAt"
              type="radio"
              name="sortBy"
            />
            <label htmlFor="createdAt">Creation Date</label>
          </div>
          <div>
            <input
              onChange={(e) => {
                handleByChange(e.target);
              }}
              id="author"
              type="radio"
              name="sortBy"
            />
            <label htmlFor="author">Author</label>
          </div>
          <div>
            <input
              onChange={(e) => {
                handleByChange(e.target);
              }}
              id="upvotesCount"
              type="radio"
              name="sortBy"
            />
            <label htmlFor="upvotesCount">Upvotes Count</label>
          </div>
        </div>
        <div>
          <p>Sort Direction</p>
          <div>
            <input
              onChange={(e) => {
                handleDirChange(e.target);
              }}
              id="asc"
              type="radio"
              name="sortDir"
            />
            <label htmlFor="asc">Ascending</label>
          </div>
          <div>
            <input
              onChange={(e) => {
                handleDirChange(e.target);
              }}
              id="desc"
              type="radio"
              name="sortDir"
            />
            <label htmlFor="desc">Descending</label>
          </div>
        </div>
      </div>
    </button>
  );
}
