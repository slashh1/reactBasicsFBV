import React from "react";
import reactDom from "react-dom";

//nested components
function BookList() {
  return (
    <section>
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return (
    <img
      src="https://cdn.pixabay.com/photo/2017/03/15/16/28/alchemy-2146679_640.jpg"
      alt="The alcmeist cover"
      width="250px"
      height="250px"
    />
  );
};
const Title = () => {
  return <h1>The Alchemist</h1>;
};
const Author = () => {
  return <p>Paulo Coelho</p>;
};

reactDom.render(<BookList />, document.getElementById("root"));
