import React, { useEffect, useState } from "react";

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
    setLoading(false);
    };
    
    const showUsers = () => { 
     return  users.map((user, index) => (
            <h3 key={index}>{user.login}</h3>
          ))
    }
    const showLoading = () => { 
        return <p>Loading.....</p>
    }

  return (
      <div>
          
          {  users ? showUsers(): showLoading()}
      
    </div>
  );
}

export default UserResults;
