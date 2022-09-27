import { useReducer, useState } from "react";
import { createContext } from "react";
import userReducer from "../Reducers/userReducer";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [userState, dispatchUserState] = useReducer(userReducer, {
    accessToken: null,
  });

  const [sortBy, setSortBy] = useState("");
  const [sortDir, setSortDir] = useState("");

  const [tagsList, setTagsList] = useState([]);

  const [addedNewQuote, setAddedNewQuote] = useState(false);
  const [filterTags, setFilterTags] = useState([]);

  const isUserLogged = () => userState.accessToken;

  return (
    <UserContext.Provider
      value={{
        userState,
        dispatchUserState,
        isUserLogged,
        addedNewQuote,
        setAddedNewQuote,
        sortBy,
        sortDir,
        setSortDir,
        setSortBy,
        tagsList,
        setTagsList,
        filterTags,
        setFilterTags,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
