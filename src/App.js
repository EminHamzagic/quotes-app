import { BrowserRouter, Route } from "react-router-dom";
import "./Css/App.css";
import Header from "./Header";
import QuoteList from "./Components/Quotes/QuoteList";
import Login from "./Login/Login";
import { useContext, useState } from "react";
import { UserContext } from "./Contexts/UserContext";
import Footer from "./Footer";
import { PageContext } from "./Contexts/PageContext";

export default function App() {
  const { isUserLogged } = useContext(UserContext);

  const [page, setPage] = useState(1);
  const [pagesNum, setPagesNum] = useState(1);

  return (
    <div className="appContainer">
      <PageContext.Provider value={{ page, setPage, pagesNum, setPagesNum }}>
        <BrowserRouter>
          <Header />
          <Route path="/login" component={isUserLogged() ? QuoteList : Login} />
          <Route
            exact
            path="/"
            component={isUserLogged() ? QuoteList : Login}
          />
          {isUserLogged() && <Footer />}
        </BrowserRouter>
      </PageContext.Provider>
    </div>
  );
}
