import React from 'react';

import Calendar from './Calendar';
import MushipanRouter from './MushipanRouter';
import UserNameForm from './UserNameForm';

import './App.css';

const routes = {
  calendar: Calendar,
  userNameForm: UserNameForm,
  default: UserNameForm
};

const App = () => {
  return (
    <div className="App">
      <MushipanRouter routes={routes} />
    </div>
  );
};

export default App;
