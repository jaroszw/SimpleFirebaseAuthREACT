import React, { useState, useContext } from 'react';
import { firebaseAuth } from '../contexts/AuthContext';

const Signin = () => {
  const { handleSignin, inputs, setInputs, errors } = useContext(firebaseAuth);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignin();
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
        <button>Signin</button>
        {errors.length > 0
          ? errors.map((error) => <p style={{ color: 'red' }}>{error}</p>)
          : null}
      </form>
    </div>
  );
};

export default Signin;
