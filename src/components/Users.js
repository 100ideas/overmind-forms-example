import React from "react";
import { useOvermind } from "../overmind";

const Users = () => {
  const { state } = useOvermind();

  return (
    <div className="users">
      {state.isLoadingUsers ? (
        <h4>Loading users...</h4>
      ) : (
        <ul>
          {state.users.map(user => (
            <li key={user.id}>
              <a href={"/users/" + user.id}>{user.name}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Users;
