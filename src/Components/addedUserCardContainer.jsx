import React from "react";
import { UserCardContainer } from "./elements.styled";
import AddedUserCard from "./addedUserCard";

const AddedUserCardContainer = (props) => {
  return (
    <UserCardContainer>
      {props.InputList.map((input) => {
          return (
            <AddedUserCard user={input.user} age={input.age}></AddedUserCard>
          );
        })}
    </UserCardContainer>
  );
};

export default AddedUserCardContainer;
