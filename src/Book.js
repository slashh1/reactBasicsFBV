import React from "react";

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

export default Book;
