import { ShareLocationSharp } from '@mui/icons-material';
import React, { Component, PureComponent } from 'react';
import DisplayCounter from '../DisplayCounter';
import { SIGN_NEGATIVE, SIGN_POSITIVE, SIGN_UNKNOWN } from '../constants';



class SettingCounter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      sign: SIGN_UNKNOWN
    }
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.state.sign !== nextState.sign;
  // }

  render() {
    console.log('SettingCounter render');
    const { sign } = this.state;
    return (
      <div>
        <button onClick={() => this.setState({ sign: SIGN_POSITIVE })}>+</button>
        <button onClick={() => this.setState({ sign: SIGN_NEGATIVE })}>-</button>
        <DisplayCounter sign={sign} />
      </div>
    );
  }
}

export default SettingCounter;
