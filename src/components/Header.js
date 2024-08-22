import React from "react";

const Header = ({ name }) => {
  return (
    <header className="header">
      <h1 className="header-title">{name}</h1>
    </header>
  );
};

export default Header;