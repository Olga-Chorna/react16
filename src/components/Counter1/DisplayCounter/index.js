import React from 'react';
import { useState } from "react";

function DisplayCounter(props)  {
  console.log('DisplayCounter render');
  const [count, setCount] = useState(0);

  console.log(count);

  const increment = () => {
    setCount((count) => count + props.step);
  }
  const decrement = () => {
    setCount((count) => count - props.step);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   // console.log('next', nextProps);
  //   // console.log('current', this.props);
  //   // return true;
  //   return nextProps.step === this.props.step;
  // }

  return (
      <section>
        <h2>count:{count}</h2>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </section>
  );

}

export default DisplayCounter;
