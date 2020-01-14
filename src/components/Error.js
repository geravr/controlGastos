import React from 'react';

const Error = ({ mensaje }) => (
  <div className="alert alert-danger error animated bounceIn">
    <p>{mensaje}</p>
  </div>
);
 
export default Error;