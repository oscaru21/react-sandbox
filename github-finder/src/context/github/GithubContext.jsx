import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    isLoading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const setLoading = (loading) =>
    dispatch({ type: "SET_LOADING", payload: { isLoading: loading } });


  const searchUsers = async (text) => {
    setLoading(true);
    
    const params = new URLSearchParams({
        q: text
    })
    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
      },
    });

    const data = await response.json();
    dispatch({ type: "GET_USERS", payload: { users: data.items, isLoading: false } });
  };

  const clearUsers = () => {
    dispatch({type: 'CLEAR_USERS', payload: {users: []}})
  }
  
  return (
    <GithubContext.Provider
      value={{
        isLoading: state.isLoading,
        users: state.users,
        searchUsers,
        clearUsers
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
