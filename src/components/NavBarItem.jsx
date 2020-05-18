import React from "react";
import { Link } from "gatsby"

const NavBarItem = props => {
  return (
    <li>
      <Link
        to={props.to}
        className={props.current ? "current" : ""}
        onClick={props.onClick}
     >
        {props.children}
      </Link>
    </li>
  );
};

export default NavBarItem;
