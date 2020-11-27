import { applyMiddleware, createStore } from "redux";

import { createRootReducer } from "./reducers";

import { createHistory, prepareHistory } from './router';

const [routerReducer, routerMiddleware] = createHistory();

export const store = createStore(
  createRootReducer({
    router: routerReducer
  }),
  applyMiddleware(routerMiddleware)
);

prepareHistory(store);
