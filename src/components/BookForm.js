import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const BookForm = ({ book }) => {
  const { removeBook } = useContext(BookContext);

  return (
    <li>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  );
};

export default BookForm;
