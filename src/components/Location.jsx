import React from "react";
import ExternalLink from "./ExternalLink";

const Location = props => {
  return (
    <li>
      <ExternalLink to={props.to}>{props.children}</ExternalLink>
    </li>
  );
};

export default Location;
