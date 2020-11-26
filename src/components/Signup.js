import React, { useState, useContext } from 'react';
import { firebaseAuth } from '../contexts/AuthContext';
import { withRouter } from 'react-router-dom';

const Signup = (props) => {
  const { handleSignup, inputs, setInputs, errors } = useContext(firebaseAuth);

  console.log(props);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleSignup();
    props.history.push('/bookpage');
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="email"
          placeholder="email"
          value={inputs.email}
        />
        <input
          onChange={handleChange}
          name="password"
          placeholder="password"
          value={inputs.password}
        />
        <button>signup</button>
        {errors.length > 0
          ? errors.map((error) => <p style={{ color: 'red' }}>{error}</p>)
          : null}
      </form>
    </div>
  );
};

export default withRouter(Signup);
