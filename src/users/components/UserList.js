import React from "react";
import UserItem from "./UserItem";

function UserList({ items }) {
  console.log(items);
  if (items.length === 0) {
    return <div>There's no users</div>;
  }

  return (
    <div>
      <ul>
        {items.map((user) => {
          return (
            <UserItem
              key={user.id}
              id={user.id}
              name={user.name}
              placeCount={user.placeCount}
              image={user.image}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default UserList;
