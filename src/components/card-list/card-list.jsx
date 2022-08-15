import React from "react";

const CardList = ({ filteredUsers }) => {
  return (
    <div>
      {filteredUsers.map((user) => {
        return <h1 key={user.id}>{user.name}</h1>;
      })}
    </div>
  );
};

export default CardList;
