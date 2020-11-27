import React from "react";

const Hero = (props) => {
  const { handleLogOut } = props;
  return (
    <section className="hero">
      <nav>
        <h2>Welcome</h2>
        <button onClick={handleLogOut}>Log Out</button>
      </nav>
    </section>
  );
};

export default Hero;
