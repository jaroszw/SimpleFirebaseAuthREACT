import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { Link } from 'react-router-dom';
import { firebaseAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const { books } = useContext(BookContext);
  const { token } = useContext(firebaseAuth);

  return (
    <div className="navbar">
      <h1>Ninja Reading List</h1>
      <p>Currently YouL: {books.length} books to get through</p>
      <button>
        <Link to="/signup">SingUp</Link>
      </button>
      <button>
        <Link to="/signin">Sing In</Link>
      </button>
    </div>
  );
};

export default Navbar;
