import { useContext } from "react";
import { PageContext } from "./Contexts/PageContext";
import "./Css/Footer.css";

export default function Footer() {
  const { pagesNum, setPage, page } = useContext(PageContext);

  return (
    <div className="footer">
      {[...Array(pagesNum)].map((btn, i) => {
        return (
          <button
            key={i}
            style={{
              backgroundColor:
                page == i + 1 ? "rgb(84, 84, 143)" : "rgb(55, 55, 95)",
            }}
            onClick={(e) => {
              setPage(e.target.id);
            }}
            id={i + 1}
          >
            {i + 1}
          </button>
        );
      })}
    </div>
  );
}
