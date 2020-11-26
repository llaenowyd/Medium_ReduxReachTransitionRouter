import React from 'react';

import { useSelector } from 'react-redux';

import { LocationProvider, Router } from '@reach/router';

import { getHistory } from './history';

const Impl = ({routes}) => {
  const pathname = useSelector(state => state.router?.location?.pathname);

  const View = routes[pathname?.substr(1).toLowerCase()] ?? routes['default'];

  return (<View />);
};

const MushipanRouter = ({routes}) => (
  <LocationProvider history={getHistory()}>
    <Router>
      <Impl routes={routes} default />
    </Router>
  </LocationProvider>
);

export default MushipanRouter;
