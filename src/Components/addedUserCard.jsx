import React from "react";
import { UserCard } from "./elements.styled";

const AddedUserCard = (props) => {
    return <UserCard>
        <h3 className="user-info">{props.user} ({props.age} years old)</h3>
    </UserCard>
}

export default AddedUserCard;