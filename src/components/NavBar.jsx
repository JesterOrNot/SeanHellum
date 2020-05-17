import React from 'react';

const NavBar = (props) => {
  return (
    <header>
      <nav>
        <ul type="none">
          {props.children}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
