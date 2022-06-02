import styled from "styled-components";

export const Container = styled.form`
  background-color: white;
  width: 400px;
  height: 180px;
  display: flex;
  justify-content: center;

  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
  label {
    font-weight: bold;
  }
`;
export const Input = styled.input`
  width: 90%;
  height: 20%;
  margin: 10px 0;
  border: 1px solid gray;
  border-radius: 5px;
`;

export const Button = styled.button`
  background-color: orange;
  width: 30%;
  height: 50px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  margin-top: 10px;
  &:hover {
    opacity: 80%;
    cursor: pointer;
  }
`;

export const UserCardContainer = styled.div`
  width: 400px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  margin-top: 2rem;
`;
export const UserCard = styled.div`
  border: 1px solid black;
  width: 100%;
  margin: 20px 0;
  padding: 5px 0;
  background-color: white;
  h3 {
    margin: 0;
    margin-left: 5px;
  }
`;

export const InvalidInputContainer = styled.div`
  background-color: white;
  width: 800px;
  border-radius: 10px;
  margin-top: 20px;
  overflow:hidden;
  position:absolute;
  z-index:3;
  h2 {
    background-color: orange;
    color: white;
    height:40px;
    margin-top:0;
    padding:15px;
  }
  button{
    margin:15px;
    
  }
  p{
    margin:15px;
  }
`;
