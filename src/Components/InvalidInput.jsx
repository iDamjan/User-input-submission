import React from "react";
import { InvalidInputContainer, Button } from "./elements.styled";

const InvalidInput = (props) => {
  const CloseInvalidInputHandler = () => {
    props.setIsValid(true);
    if (props.isAgeNegative === true) props.setIsAgeNegative(false);
  };
  return (
    <InvalidInputContainer>
      <h2>Invalid Input</h2>
      {props.isAgeNegative ? (
        <p>Enter a value between 0 to 100</p>
      ) : (
        <p>Please enter a valid name and age (non-empty-value)</p>
      )}

      <Button onClick={CloseInvalidInputHandler}>Okay</Button>
    </InvalidInputContainer>
  );
};

export default InvalidInput;
