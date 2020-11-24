import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { SET_USER_NAME } from './actionTypes';

/**
 * UserNameView - This view serves as an example "single-page app" view,
 * rendered from Redux state.
 */

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const dispatch = useDispatch();
  const userName = useSelector(state => state.userNameForm.userName);

  const inputRef = React.useRef();

  const handleSubmit = () => {
    const userName = inputRef.current.value;

    dispatch({type: SET_USER_NAME, payload: { userName }});
  };

  if (!userName) {
    return (
      <div>
        <div>enter your name:</div>
        <input ref={inputRef} type="text" autoFocus />
        <input type="button" value="Submit" onClick={handleSubmit}/>
      </div>
    );
  } else {
    return (
      <div>{`Hello, ${userName}`}</div>
    );
  }
}
