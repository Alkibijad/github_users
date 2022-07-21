import React, { useEffect, useState } from "react";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";

function UserResults() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();
    setUsers(data);
  };

  const showUsers = () => {
      return users.map((user, index) => <UserItem key={index} user={user} />);
    };
    

  const showLoading = () => {
    return <Spinner />;
  };

  return <div className="users_container">{users.length ? showUsers() : showLoading()}</div>;
}

export default UserResults;
