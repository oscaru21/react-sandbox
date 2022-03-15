import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    isLoading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const setLoading = () => dispatch({ type: "SET_LOADING" });
  //search users
  const searchUsers = async (text) => {
    setLoading();
    const params = new URLSearchParams({
      q: text,
    });
    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
      },
    });

    const data = await response.json();
    dispatch({
      type: "GET_USERS",
      payload: { users: data.items, isLoading: false },
    });
  };
  //get user
  const getUser = async (login) => {
    setLoading();
    const response = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
      },
    });
    if(response.status === 404){
      window.location = '/notfound'
    }else{
      const data = await response.json();
      dispatch({
        type: "GET_USER",
        payload: { user: data, isLoading: false },
      });
      
    }
  };
  //get user repos
  const getRepos = async (login) => {
    setLoading();

    const params = new URLSearchParams({
      sort: 'created',
      per_page: 10
    });

    const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
      },
    });
    if(response.status === 404){
      window.location = '/notfound'
    }else{
      const data = await response.json();
      dispatch({
        type: "GET_REPOS",
        payload: { repos: data, isLoading: false },
      });
    }
  };

  const clearUsers = () => {
    dispatch({ type: "CLEAR_USERS", payload: { users: [] } });
  };

  return (
    <GithubContext.Provider
      value={{
        isLoading: state.isLoading,
        users: state.users,
        user: state.user,
        repos: state.repos,
        searchUsers,
        clearUsers,
        getUser,
        getRepos
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
