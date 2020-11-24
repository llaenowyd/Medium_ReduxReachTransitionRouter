import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { SET_CALENDAR_STYLE } from './actionTypes';

/**
 * Calendar - This view serves as an example "single-page app" view,
 * rendered from Redux state.
 */

const settingsGroupStyle = {
  marginTop: '1em',
  padding: '1em',
  border: '1px solid blue',
  backgroundColor: 'lightblue'
};

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const dispatch = useDispatch();
  const calendarStyle = useSelector(state => state.calendar.calendarStyle);

  const setCalendarStyle = calendarStyle => {
    dispatch({type: SET_CALENDAR_STYLE, payload: { calendarStyle }});
  };

  const setDefaultStyle = () => setCalendarStyle('');

  const setIsoStyle = () => setCalendarStyle('iso');

  const now = new Date();

  const calendarContent = calendarStyle ? now.toISOString() : `${now}`;

  return (
    <div>
      <div>{calendarContent}</div>
      <div style={settingsGroupStyle}>
        <div>style:</div>
        <div>
          <input
            type="radio"
            id="defaultCalendarStyleRadio"
            name="calendarStyleRadio"
            value="default"
            checked={!calendarStyle}
            onClick={setDefaultStyle}
          />
          <label htmlFor="defaultCalendarStyleRadio" onClick={setDefaultStyle}>default</label>
        </div>
        <div>
          <input
            type="radio"
            id="isoCalendarStyleRadio"
            name="calendarStyleRadio"
            value="ISO-8601"
            checked={calendarStyle === 'iso'}
            onClick={setIsoStyle}
          />
          <label htmlFor="isoCalendarStyleRadio" onClick={setIsoStyle}>ISO-8601</label>
        </div>
      </div>
    </div>
  );
}
