import { useDispatch } from 'react-redux'
import { createBrowserHistory } from 'history';
import { createReduxHistoryContext, push, reachify } from "redux-first-history";

const _history = {
  createReduxHistory: null,
  reachHistory: null,
  reduxHistory: null,
  routerMiddleware: null,
  routerReducer: null,
};

export const createHistory = () => {
  const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
    history: createBrowserHistory(),
    //other options if needed
  })

  _history.createReduxHistory = createReduxHistory;
  _history.routerMiddleware = routerMiddleware;
  _history.routerReducer = routerReducer;

  return [_history.routerReducer, _history.routerMiddleware];
};

export const prepareHistory = store => {
  _history.reduxHistory = _history.createReduxHistory(store);
  _history.reachHistory = reachify(_history.reduxHistory);
};

export const getHistory = () => _history.reachHistory;
export const getMiddleware = () => _history.routerMiddleware;
export const getReducer = () => _history.routerReducer;

/**
 * useDispatchRoutes
 * @param routes - compatible with parameter to MushipanRouter
 * @returns {{[routeName: string]: ViewChangingActionDispatcher}}
 */
export const useDispatchRoutes = routes => {
  const dispatch = useDispatch();

  return Object.fromEntries(
    Object.entries(routes).map(
      ([routeName, {pathname}]) => [routeName, () => dispatch(push(pathname))]
    ));
};
