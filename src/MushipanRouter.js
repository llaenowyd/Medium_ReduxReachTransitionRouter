import React from 'react';

import { Router, useLocation } from '@reach/router';

const Impl = ({routes}) => {
  const { pathname } = useLocation();

  const View = routes[pathname.substr(1).toLowerCase()] ?? routes['default'];

  return (<View />);
};

const MushipanRouter = ({routes}) => {
  return (
    <Router>
      <Impl routes={routes} default />
    </Router>
  )
};

export default MushipanRouter;
