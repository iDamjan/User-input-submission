import React, { useState } from "react";
import { Container, Input, Button } from "../style/elements.styled";
import AddedUserCardContainer from "./addedUserCardContainer";
import InvalidInput from "./InvalidInput";

const UserForm = () => {
  const [userInput, setUserInput] = useState("");
  const [userAge, setUserAge] = useState("");

  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorText, setErrorText] = useState("");
  
  const onSubmit = (e) => {
    e.preventDefault();

    if (userInput.trim().length === 0 || userAge.trim().length === 0) {
      setErrorText("Please enter name & age");
      setIsModalOpen(true);
    } else if (Math.sign(userAge.toString()) === -1) {
      setErrorText("Please enter positive number");
      setIsModalOpen(true);
    } else {
      setUsers([
        ...users,
        { name: userInput, age: userAge, id: Math.random().toString() },
      ]);

      setUserInput("");
      setUserAge("");
    }
  };

  const isInvalidModalOpen = (open) => {
    setIsModalOpen(open);
  };

  return (
    <>
      <Container>
        <form onSubmit={onSubmit}>
          <label htmlFor="user">User</label>
          <Input
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            id="user"
            type="text"
          />
          <label htmlFor="age">Age</label>
          <Input
            value={userAge}
            onChange={(e) => setUserAge(e.target.value)}
            id="age"
            type="text"
          />
          <Button type="submit">Add User</Button>
        </form>
      </Container>
      {isModalOpen && (
        <InvalidInput setIsOpen={isInvalidModalOpen} text={errorText} />
      )}
      {users.length > 0 && <AddedUserCardContainer users={users} />}
    </>
  );
};
export default UserForm;
