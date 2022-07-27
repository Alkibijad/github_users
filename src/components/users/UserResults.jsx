import React, { useContext } from "react";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/GitHubContext";

function UserResults() {
  const { users } = useContext(GithubContext);

  const showUsers = () => {
    return users.map((user, index) => <UserItem key={index} user={user} />);
  };

  const showLoading = () => {
    return <Spinner />;
  };

  return (
    <div className="users_container">
      {users.length ? showUsers() : showLoading()}
    </div>
  );
}

export default UserResults;
