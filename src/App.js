import { BrowserRouter, Route } from "react-router-dom";
import "./Css/App.css";
import Header from "./Header";
import Quote from "./Components/Quote";
import Login from "./Login/Login";
import UserContextProvider from "./Contexts/UserContext";

export default function App() {
  return (
    <div className="appContainer">
      <UserContextProvider>
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={Quote} />
          <Route path="/login" component={Login} />
        </BrowserRouter>
      </UserContextProvider>
    </div>
  );
}
