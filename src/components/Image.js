import React from 'react';


// Simple component that holds the individual images
const Image = props => (
  <li>
    <img src={props.url} alt={props.title} />
  </li>
);

export default Image;