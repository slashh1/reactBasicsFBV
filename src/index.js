import React from "react";
import reactDom from "react-dom";
import "./index.css";
//React import export ES6
import { books } from "./books"; // this is a named export where we can just export the component from the js file
import AliasBook from "./Book"; // this is a default export where we can export the component and rename it in the imported file
import { Greeting } from "./Testing/test"; //another named export

Greeting();

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        // once we return the key which has to be a unique value for a component the warning is resolved
        return <AliasBook key={book.id} {...book} />;
      })}
    </section>
  );
}

reactDom.render(<BookList />, document.getElementById("root"));
