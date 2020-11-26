import { createBrowserHistory } from 'history';
import { createReduxHistoryContext, reachify } from "redux-first-history";

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

  return _history.routerReducer;
};

export const prepareHistory = store => {
  _history.reduxHistory = _history.createReduxHistory(store);
  _history.reachHistory = reachify(_history.reduxHistory);
};

export const getHistory = () => _history.reachHistory;
export const getMiddleware = () => _history.routerMiddleware;
export const getReducer = () => _history.routerReducer;
