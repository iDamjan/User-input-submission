import React from "react";
import { UserCardContainer } from "../style/elements.styled";
import { UserCard } from "../style/elements.styled";

const AddedUserCardContainer = ({ users }) => {
  return (
    <UserCardContainer>
      {users.map((user, index) => (
        <UserCard key={index}>
          <h3 className="user-info">
            {user.name} ({user.age} years old)
          </h3>
        </UserCard>
      ))}
    </UserCardContainer>
  );
};

export default AddedUserCardContainer;
