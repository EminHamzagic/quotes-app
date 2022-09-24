import { BrowserRouter, Route } from "react-router-dom";
import "./Css/App.css";
import Header from "./Header";
import QuoteList from "./Quotes/QuoteList";
import Login from "./Login/Login";
import { useContext } from "react";
import { UserContext } from "./Contexts/UserContext";

export default function App() {
  const { isUserLogged } = useContext(UserContext);

  return (
    <div className="appContainer">
      <BrowserRouter>
        <Header />
        <Route path="/login" component={isUserLogged() ? QuoteList : Login} />
        <Route exact path="/" component={isUserLogged() ? QuoteList : Login} />
      </BrowserRouter>
    </div>
  );
}
