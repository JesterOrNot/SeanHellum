import React from 'react';

const Error = props => {
  return (
    <div class="error">
      <h1>{ props.children }</h1>
    </div>
  );
};

export default Error;
