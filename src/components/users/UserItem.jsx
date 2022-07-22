import React from "react";
import { Link } from "react-router-dom";

function UserItem({ user }) {
  console.log(user);
  return (
    <div className="users-card">
      <div className="image-container">
        <img src={user.avatar_url} alt="" />
      </div>
      <div>
        <p>{user.login}</p>
        {/* <a href={user.html_url} target="blank" rel="noreferrer">
          Vistim me
        </a> */}
        <Link to={ `/users/${user.login}`}>Visit page</Link>
      </div>
    </div>
  );
}

export default UserItem;
