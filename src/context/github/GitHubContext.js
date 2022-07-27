import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const intialState = {
    users: [],
  };

  const [state, dispatch] = useReducer(githubReducer, intialState);

  // this was a test mode, to make sure that API is working,
  //but we want to search users not to get them all

  // const fetchUsers = async () => {
  //     const response = await fetch(`${GITHUB_URL}/users`, {
  //       headers: {
  //         Authorization: `token${GITHUB_TOKEN}`,
  //       },
  //     });
  //     const data = await response.json();
  //     dispatch({type: "GET_USERS", payload: data })
  // };

  const searchUsers = async (text) => {
    const params = new URLSearchParams({
      q: text,
    });

    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token${GITHUB_TOKEN}`,
      },
    });
    const { items } = await response.json();
    dispatch({ type: "GET_USERS", payload: items });
  };

  const clearSearchResults = () => dispatch({type: "CLEAR_RESULTS"})
  

  return (
    <GithubContext.Provider value={{ users: state.users, searchUsers, clearSearchResults }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
