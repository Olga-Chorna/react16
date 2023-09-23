import { ShareLocationSharp } from '@mui/icons-material';
import React, { Component, PureComponent, useState } from 'react';
import DisplayCounter from '../DisplayCounter';
import { SIGN_NEGATIVE, SIGN_POSITIVE, SIGN_UNKNOWN } from '../constants';

function SettingCounter() {
  console.log('SettingCounter render');
  
  const [sign, setSign] = useState(null);

  return (
    <div>
      <button onClick={() => setSign(SIGN_POSITIVE)}>+</button>
      <button onClick={() => setSign(SIGN_NEGATIVE)}>-</button>
      <DisplayCounter sign={sign} />
    </div>
  );

}

export default SettingCounter;
