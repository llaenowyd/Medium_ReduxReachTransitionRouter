import React from 'react';

import { createUseStyles } from 'react-jss';

import { MushipanRouter } from './router';
import ViewChangingButtons from './ViewChangingButtons';
import routesConfig, { useSlideInTransitionGroup } from './routes';

const useStyles = createUseStyles({
  app: {
    position: 'absolute',
    overflow: 'hidden',
    width: '480px',
    margin: '1em',
    padding: '1em',
    backgroundColor: 'lightgrey',
    border: '1px solid darkgrey',
  }
});

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <ViewChangingButtons routes={routesConfig} />
      <MushipanRouter routes={routesConfig} useTransitionGroup={useSlideInTransitionGroup} />
    </div>
  );
};

export default App;
