import { useContext, useState } from "react";
import "../../Css/Filter.css";
import { UserContext } from "../../Contexts/UserContext";

export default function FilterQuotesBtn() {
  const { setFilterTags, tagsList } = useContext(UserContext);
  // const [tagsForFilter, setTagsForFilter] = useState([]);

  const handleChange = (e) => {
    const tagName = e.id.substr(0, e.id.length - 1);
    if (e.checked) setFilterTags((prev) => [...prev, tagName]);
    else setFilterTags((prev) => prev.filter((tag) => tag !== tagName));
  };

  return (
    <button className="filterBtn">
      Filter
      <div className="filterContainer">
        <p>Filter By</p>
        {tagsList.map((tag, i) => {
          return (
            <div key={tag + i.toString()}>
              <input
                onChange={(e) => {
                  handleChange(e.target);
                }}
                id={tag + i.toString()}
                type="checkbox"
              />
              <label htmlFor={tag + i.toString()}>{tag}</label>
            </div>
          );
        })}
      </div>
    </button>
  );
}
