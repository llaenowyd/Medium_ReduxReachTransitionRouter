import React from 'react';

import { MushipanRouter } from './router';
import ViewChangingButtons from './ViewChangingButtons';
import routesConfig from './routes';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <ViewChangingButtons routes={routesConfig} />
      <MushipanRouter routes={routesConfig} />
    </div>
  );
};

export default App;
