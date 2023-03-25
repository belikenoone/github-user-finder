import { createContext, useReducer } from "react";
import githubReducer from "./GithubReduce";
const GithubContext = createContext();
export const GithubContextProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos:[],
    loading: false,
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);

  //SEARCHES FOR USERS
  const getUsers = async (text) => {
    setLoading();
    const response = await fetch(
      `https://api.github.com/search/users?q=${text}`
    );
    const { items } = await response.json();
    dispatch({ type: "GET_USERS", payload: items });
  };
  //Searches for a single user
  const getSingleUser = async (login) => {
    setLoading();
    const response = await fetch(`https://api.github.com/users/${login}`);
    if (response.status === 404) {
      window.location = "/not-found";
    } else {
      const data = await response.json();
      dispatch({ type: "GET_SINGLE_USER", payload: data });
    }
  };

  //GET USER REPOS
  const getUserRepos = async (login) => {
    setLoading();
    const params =  new URLSearchParams({
      sort:'created',
      per_page:10,
    })
    const response = await fetch(`https://api.github.com/users/${login}/repos?${params}`);
    if (response.status === 404) {
      window.location = "/not-found";
    } else {
      const data = await response.json();
      dispatch({ type: "GET_USER_REPOS", payload: data });
    }
  };
  const clearUsers = () => {
    dispatch({ type: "CLEAR_USERS" });
  };
  const setLoading = () => {
    dispatch({ type: "SET_LOADING" });
  };
  return (
    <GithubContext.Provider
      value={{
        getUsers,
        users: state.users,
        loading: state.loading,
        user: state.user,
        repos:state.repos,
        clearUsers,
        getSingleUser,
        getUserRepos
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export default GithubContext;
