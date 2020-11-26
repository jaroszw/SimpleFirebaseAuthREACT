import React, { useContext } from 'react';
import BookList from './BookList';
import BookForm from './BookForm';
import { firebaseAuth } from '../contexts/AuthContext';
import { withRouter } from 'react-router-dom';

const BookPage = (props) => {
  const { handleSignout } = useContext(firebaseAuth);

  const singOutHandle = () => {
    handleSignout();
    props.history.push('/');
  };

  return (
    <div>
      <BookList />
      <BookForm />
      <button onClick={singOutHandle}>SING OUT</button>
    </div>
  );
};

export default withRouter(BookPage);
