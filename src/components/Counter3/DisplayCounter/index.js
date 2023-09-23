import React, { Component, useState } from 'react';
import { SIGN_UNKNOWN } from '../constants';

function DisplayCounter(props) {
  console.log('DisplayCounter render');

  const { sign } = props;

  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((count) => count + 1);
  }
  const decrement = () => {
    setCount((count) => count - 1);
  }

  const btnText = sign === SIGN_UNKNOWN ? "?" : sign ? "+" : "-";
  const btnOnClick = sign === SIGN_UNKNOWN ? null : sign ? increment : decrement;
  return (
    <section>
      <h2>count:{count}</h2>
      <button onClick={btnOnClick}>{btnText}</button>
    </section>
  );
}

export default DisplayCounter;
