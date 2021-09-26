import React from "react";
import reactDom from "react-dom";
import "./index.css";
//

function BookList() {
  return (
    <section className="booklist">
      <Book job="developer" />
      <Book title="Random Title" number={32} />
    </section>
  );
}

const title = "The Alchemist";
const author = "Paulo Coelho";
const img =
  "https://cdn.pixabay.com/photo/2017/03/15/16/28/alchemy-2146679_640.jpg";

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt="" width="250px" height="150px" />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      <p>{props.title}</p>
      <p>{props.job}</p>
      <p>{props.number}</p>
    </article>
  );
};

reactDom.render(<BookList />, document.getElementById("root"));
