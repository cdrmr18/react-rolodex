import React from "react";
import Card from "../card/card";
import "./card-list.styles.css";

const CardList = ({ filteredUsers }) => {
  return (
    <div className="card-list">
      {filteredUsers.map((user) => {
        return <Card user={user} />;
      })}
    </div>
  );
};

export default CardList;
