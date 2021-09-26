import React from "react";
import reactDom from "react-dom";
import "./index.css";
//adding css through jsx
function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
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
      height="150px"
    />
  );
};
const Title = () => {
  return <h1>The Alchemist</h1>;
};
const Author = () => {
  return (
    <p style={{ color: "#617d98", fonstSize: "0.75rem", marginTop: "0.25rem" }}>
      Paulo Coelho
    </p>
  );
};

reactDom.render(<BookList />, document.getElementById("root"));
