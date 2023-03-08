import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

const Person = {
  fName: "James",
  lName: "Bond"
};

const User = {
  ...Person,
  id: 1,
  userName: "jmwww"
};

console.log(User);

const fruits = ["apple", "Orange", "lime"];
const citrus = [...fruits, "mango", "grape"];

console.log(citrus);
