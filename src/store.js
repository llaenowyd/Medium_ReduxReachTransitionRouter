import { createStore } from "redux";

import { createRootReducer } from "./reducers";

import { createHistory, prepareHistory } from './router';

const routerReducer = createHistory();

export const store = createStore(
  createRootReducer({
    router: routerReducer
  })
);

prepareHistory(store);
