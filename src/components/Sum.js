import React from 'react';

function Sum(props) {
  const { a, b } = props;

  return (
    <p>
      Sum of {a} and {b} is {a + b}
    </p>
  );
}

export default Sum;
