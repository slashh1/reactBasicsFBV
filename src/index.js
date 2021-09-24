import React from "react";
import reactDom from "react-dom";

// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "Hello World!")
//   );
// };

function Greeting() {
  return (
    <div>
      <h2>Hello World!</h2>
    </div>
  );
}

reactDom.render(<Greeting />, document.getElementById("root"));
