import React, { useState, useContext, useEffect } from "react";
import GithubContext from "../context/github/GitHubContext";

function UsersSearch() {
  const { users, searchUsers, clearSearchResults } = useContext(GithubContext);
  const [text, setText] = useState("");

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(users);

    if (text === "") {
      alert("Please enter search parametar");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  

  return (
    <div className="users_search_container">
      <form className="search_form" onSubmit={handleSubmit}>
        <input
          className="search_input"
          type="text"
          value={text}
          onChange={handleChange}
        />
        <button className="search_button">Search</button>
      </form>
      {users.length > 0 && (
        <button className="clear_button" onClick={clearSearchResults}>Clear Search</button>
      )}
    </div>
  );
}

export default UsersSearch;
