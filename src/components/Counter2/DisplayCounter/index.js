import React, { Component } from 'react';
import { SIGN_UNKNOWN } from '../constants';

class DisplayCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  increment = () => {
    this.setState((state, props) => ({
      count: state.count + 1
    }))
  }
  decrement = () => {
    this.setState((state, props) => ({
      count: state.count - 1
    }))
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   // console.log('next', nextProps);
  //   // console.log('current', this.props);
  //   return nextProps.sign !== this.props.sign || nextState.count !== this.state.count;
  // }
  render() {
    console.log('DisplayCounter render');
    const { count } = this.state;
    const { sign } = this.props;
    const btnText = sign === SIGN_UNKNOWN ? "?" : sign ? "+" : "-";
    const btnOnClick = sign === SIGN_UNKNOWN ? null : sign ? this.increment : this.decrement;
    return (
      <section>
        <h2>count:{this.state.count}</h2>
        <button onClick={btnOnClick}>{btnText}</button>
      </section>
    );
  }
}

export default DisplayCounter;
