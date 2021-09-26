import React from "react";
import reactDom from "react-dom";
import "./index.css";
//props with children

const firstBook = {
  img: "https://cdn.pixabay.com/photo/2017/03/15/16/28/alchemy-2146679_640.jpg",
  title: "The Alchemist",
  author: "Paulo Coelho",
};

const secondBook = {
  img: "https://cdn.pixabay.com/photo/2018/06/15/11/16/hogwarts-3476786__340.png",
  title: "Harry Potter",
  author: "J.K Rowling",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quam
          reprehenderit libero! Eos provident voluptas sit impedit non nulla
          maxime.
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  // const Book = ({ img, title, author, children }) => { // using props directly by destructuring during function definition
  // const { img, title, author, children } = props; //destructuring props and using them
  console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt="" width="250px" height="150px" />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
      {props.children}
    </article>
  );
};

reactDom.render(<BookList />, document.getElementById("root"));
