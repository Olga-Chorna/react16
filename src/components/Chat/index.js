import React, { useEffect, useReducer } from 'react';
import * as API from './../../api';
import { act } from 'react-dom/test-utils';
import { reducer } from './reducer';
const RESPONSE_SUCCESS = 'DATA_ALL_RESPONSE_SUCCESS';
const RESPONSE_ERROR = 'DATA_ALL_RESPONSE_ERROR';

const Chat = () => {
  const [state, dispatch] = useReducer(reducer, {
    messagesWhithAuthor: [],
    error: null
  })

  useEffect(() => {
    API.getChatJSON()
      .then(data => dispatch({
        type: RESPONSE_SUCCESS,
        data
      }))
      .catch(error => dispatch({
        type: RESPONSE_ERROR,
        error
      }))
  }, [])



  return (
    <div>
      <h2>Chat</h2>
      {
        state.messagesWhithAuthor.map(m => (
          <article key={m.id}>
            <p>{m.text}:{m.author}</p>
          </article>
        ))
      }
    </div>
  );
}

export default Chat;
