import { Link } from "react-router-dom";
import "./Css/Header.css";

export default function Header() {
  return (
    <div className="header">
      <button>
        <Link style={{ color: "white", textDecoration: "none" }} to="/">
          Logout
        </Link>
      </button>
      <button>
        <Link style={{ color: "white", textDecoration: "none" }} to="/login">
          Login
        </Link>
      </button>
    </div>
  );
}
