import React, { useState } from "react";
import { Container, Input, Button } from "./elements.styled";

const Form = (props) => {
  const [userInput, setUserInput] = useState("");
  const [userAge, setUserAge] = useState("");

  const userInputHandler = (e) => {

    if (e.target.value.trim().length > 0) {
      props.setIsValid(true);
    }
    setUserInput(e.target.value);
  };
  const userAgeHandler = (e) => {

    if (e.target.value.trim().length > 0) {
      props.setIsValid(true);
    }
    setUserAge(e.target.value);
  };

  const onSubmitForm = (e) => {

    e.preventDefault();
    if (userInput.trim().length === 0 && userAge.trim().length === 0) {
      props.setIsValid(false);

    } else if (Math.sign(userAge.toString()) === -1) {
      props.setIsAgeNegative(true);
      

    } else {
      props.setInputList([
        ...props.InputList,
        { user: userInput, age: userAge, id: Math.random().toString() },
      ]);
      
      props.setIsValid(true);
      setUserInput("");
      setUserAge("");
    
    }
  };

  return (
    <Container>
      <label htmlFor="user">User</label>
      <Input
        style={{ borderColor: props.isValid ? "black" : "red" }}
        value={userInput}
        onChange={userInputHandler}
        id="user"
        type="text"
      />
      <label htmlFor="age">Age</label>
      <Input
        style={{ borderColor: props.isValid ? "black" : "red" }}
        value={userAge}
        onChange={userAgeHandler}
        id="age"
        type="text"
      />
      <Button onClick={onSubmitForm}>Add User</Button>
    </Container>
  );
};
export default Form;
