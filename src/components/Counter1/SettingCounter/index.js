import { ShareLocationSharp } from '@mui/icons-material';
import React, { Component } from 'react';
import { useState } from "react";
import DisplayCounter from '../DisplayCounter';


function SettingCounter () {
  console.log('SettingCounter render');

  const [step, setStep] = useState(1);

  const handlerInput = ({ target: { value } }) => {
    setStep(Number(value));
  }

    return (
      <div>
        <input
          type="range"
          name="step"
          value={step}
          onChange={handlerInput}
          min="1" max="10" step="1"
        />
        <h2>step: {step}</h2>
        <DisplayCounter step={step} />
      </div>
    );
}

export default SettingCounter;
