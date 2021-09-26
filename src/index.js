import React from "react";
import reactDom from "react-dom";
import "./index.css";
//DRY principle for props using arrays

// const names = ["michael", "jim", "dwight", "pam"];

const books = [
  {
    img: "https://cdn.pixabay.com/photo/2017/03/15/16/28/alchemy-2146679_640.jpg",
    title: "The Alchemist",
    author: "Paulo Coelho",
  },
  {
    img: "https://cdn.pixabay.com/photo/2018/06/15/11/16/hogwarts-3476786__340.png",
    title: "Harry Potter",
    author: "J.K Rowling",
  },
];
function BookList() {
  return (
    <section className="booklist">
      {/* {books} */}
      {/* the above code will return an error because books array contain objects and react cannot render objects directly so we use the map function and return each object in a object in prop */}
      {books.map((book) => {
        return <Book book={book} />;
      })}
      {/* {names} */}
      {/* since the above will return all object directly we can use map function to clean them and return each value in a single tag */}
      {/* {names.map((name) => {
        return <h1>{name}</h1>;
      })} */}
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  const { img, title, author } = props.book;
  return (
    <article className="book">
      <img src={img} alt="" width="250px" height="150px" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

reactDom.render(<BookList />, document.getElementById("root"));
