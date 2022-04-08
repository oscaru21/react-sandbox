import { createContext, useReducer } from "react";
import twitterReducer from "./TwitterReducer";

const TwitterContext = createContext();

export const TwitterProvider = ({ children }) => {
  const initialState = {
    user: {},
    tweets: [],
    isLoading: false,
  };

  const [state, dispatch] = useReducer(twitterReducer, initialState);

  return (
    <TwitterContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TwitterContext.Provider>
  );
};

export default TwitterContext;
