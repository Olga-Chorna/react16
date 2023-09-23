import React, { useReducer, useState } from "react";

const reducer = (state, action) => {
  const { name, value } = action;
  const newState = {
    ...state,
    [name]: value
  }
  return newState;
}

const SignUpForm = () => {

  const [state, dispatch] = useReducer(reducer, {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handlerInput = ({ target: { name, value } }) => {
    const action = { name, value };
    dispatch(action);
  }


  return (
    <div>
      <h2>sign up</h2>
      <input type="text" name="firstName" value={state.firstName} onChange={handlerInput} />
      <input type="text" name="lastName" value={state.lastName} onChange={handlerInput} />
      <input type="email" name="email" value={state.email} onChange={handlerInput} />
      <input type="password" name="password" value={state.password} onChange={handlerInput} />

    </div>
  );
}

export default SignUpForm;
