import React from "react";

function UserItem({ user }) {
  console.log(user);
  return (
    <div className="users-card">
      <div className="image-container">
        <img src={user.avatar_url} alt="" />
      </div>
      <p>{user.login}</p>
    </div>
  );
}

export default UserItem;
