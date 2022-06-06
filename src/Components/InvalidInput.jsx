import React from "react";
import { InvalidInputContainer, Button } from "../style/elements.styled";

const InvalidInput = ({ text, setIsOpen }) => {
  return (
    <InvalidInputContainer>
      <h2>Invalid Input</h2>
      <p>{text}</p>
      <Button onClick={() => setIsOpen(false)}>Okay</Button>
    </InvalidInputContainer>
  );
};

export default InvalidInput;
