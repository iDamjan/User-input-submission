import Form from "./Components/form";
import "./App.css";
import AddedUserCardContainer from "./Components/addedUserCardContainer";
import React, { useState } from "react";

import InvalidInput from "./Components/InvalidInput";

function App() {
  const [InputList, setInputList] = useState([]);
  const [isValid, setIsValid] = useState(true);
  const [isAgeNegative, setIsAgeNegative] = useState(false);

  return (
    <div
      style={{ backgroundColor: isValid ? "" : "rgba(25, 25,25, 5)" }}
      className="wrapper"
    >
      <Form
        isValid={isValid}
        setIsValid={setIsValid}
        InputList={InputList}
        setInputList={setInputList}
        isAgeNegative={isAgeNegative}
        setIsAgeNegative={setIsAgeNegative}
      ></Form>
      {!isValid ? (
        <InvalidInput setIsValid={setIsValid}></InvalidInput>
      ) : isAgeNegative ? (
        <InvalidInput
          isAgeNegative={isAgeNegative}
          setIsAgeNegative={setIsAgeNegative}
          setIsValid={setIsValid}
        ></InvalidInput>
      ) : InputList.length === 0 ? (
        ""
      ) : (
        <AddedUserCardContainer InputList={InputList} />
      )}
    </div>
  );
}

export default App;
