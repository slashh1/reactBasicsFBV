import React from "react";
import reactDom from "react-dom";
import "./index.css";
//React events
//synthetic events : https://reactjs.org/docs/events.html

const books = [
  {
    id: 1,
    img: "https://cdn.pixabay.com/photo/2017/03/15/16/28/alchemy-2146679_640.jpg",
    title: "The Alchemist",
    author: "Paulo Coelho",
  },
  {
    id: 2,
    img: "https://cdn.pixabay.com/photo/2018/06/15/11/16/hogwarts-3476786__340.png",
    title: "Harry Potter",
    author: "J.K Rowling",
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/51Z-XJXiQnL._SX396_BO1,204,203,200_.jpg",
    title: "C++ Programming Language, The",
    author: "Bjarne Stroustrup",
  },
];
function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        // once we return the key which has to be a unique value for a component the warning is resolved
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

//onClick , onMouseOver

const Book = (props) => {
  // console.log(props);
  const { img, title, author } = props;
  const clickHandler = (e) => {
    console.log(e, e.target);
    alert(title);
  };
  const clickAuthor = (author) => {
    console.log(author);
  };
  return (
    <article className="book" onMouseOver={() => console.log(title)}>
      {/* above example shows we can use inline functions on synthetic events */}
      <img src={img} alt="" width="250px" height="150px" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button onClick={clickHandler}>Title</button>
      <button
        onClick={() => {
          clickAuthor(author);
        }}
        // if i pass the function directly as  clickAuthor(author) without using an arrow function
        // it will call the function without click on load hence to make it load only on cliek we wrap it with an arrow function
      >
        Autor
      </button>
    </article>
  );
};

reactDom.render(<BookList />, document.getElementById("root"));
