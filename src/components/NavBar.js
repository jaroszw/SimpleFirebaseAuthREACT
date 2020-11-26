import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import { firebaseAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const { books } = useContext(BookContext);
  const { test } = useContext(firebaseAuth);

  return (
    <div className="navbar">
      <h1>Ninja Reading List</h1>
      <p>Currently YouL: {books.length} books to get through</p>
    </div>
  );
};

export default Navbar;
