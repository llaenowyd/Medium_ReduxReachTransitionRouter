import React from 'react';

import { useSelector } from 'react-redux';

import { LocationProvider, Router } from '@reach/router';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { getHistory } from './history';

const Impl = ({routes, useTransitionGroup}) => {
  const [pathname, key] = useSelector(state => {
    const location = state.router?.location;

    if (!location) return null;

    if (location.pathname) return [location.pathname, location.key];
    else return [location.location?.pathname, location.location?.key];
  });

  const transitionGroup = useTransitionGroup();

  const View = routes[pathname?.substr(1).toLowerCase()] ?? routes['default'];

  return (
    <TransitionGroup>
      <CSSTransition key={pathname} classNames={transitionGroup} timeout={500}>
        <View />
      </CSSTransition>
    </TransitionGroup>
  );
};

const MushipanRouter = ({routes, useTransitionGroup}) => {
  const pathnameToView = Object.fromEntries(
    Object.entries(routes).map(
      ([, {pathname, view}]) => [pathname, view]
    ));

  return (
    <LocationProvider history={getHistory()}>
      <Router>
        <Impl routes={pathnameToView} useTransitionGroup={useTransitionGroup} default />
      </Router>
    </LocationProvider>
  );
}

export default MushipanRouter;
