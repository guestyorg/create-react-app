import { applyMiddleware, combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';

import {
  actionSplitterMiddleware,
  apiMiddleware,
  loggerMiddleware,
  stateFreezer,
} from '@guestyci/atomic-design/dist/reduxRoot/';

const tempReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
// shape the state structure
export const rootReducer = {
  tempReducer,
  form: formReducer,
};

// // create the feature middleware array
export const featureMiddleware = [
//   // reservationPageMiddleware,
//   // guestCardMiddleware,
];

// create the core middleware array
const coreMiddleware = [
  actionSplitterMiddleware,
  apiMiddleware,
  loggerMiddleware,
];

// compose the middleware with additional (optional) enhancers,
const enhancer = applyMiddleware(...featureMiddleware, ...coreMiddleware);
// create and configure the store
const store = createStore(stateFreezer(combineReducers(rootReducer)), {}, enhancer);
export default store;

