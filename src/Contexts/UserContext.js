import { useReducer, useState } from "react";
import { createContext } from "react";
import userReducer from "../Reducers/userReducer";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [userState, dispatchUserState] = useReducer(userReducer, {
    accessToken: null,
  });

  const [addedNewQuote, setAddedNewQuote] = useState(false);

  const isUserLogged = () => userState.accessToken;

  return (
    <UserContext.Provider
      value={{
        userState,
        dispatchUserState,
        isUserLogged,
        addedNewQuote,
        setAddedNewQuote,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
