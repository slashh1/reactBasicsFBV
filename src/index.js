import React from "react";
import reactDom from "react-dom";

//nested components

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}
const Person = () => <h2>Jhon Doe</h2>;
const Message = () => {
  return <p>This is a message</p>;
};
reactDom.render(<Greeting />, document.getElementById("root"));
