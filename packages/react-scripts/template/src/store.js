import { applyMiddleware, combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';

// import { apiMiddleware } from './redux-root/middleware/api';
// import { loggerMiddleware } from './redux-root/middleware/logger';
// import { actionSplitterMiddleware } from './redux-root/middleware/actionSplitter';
//
// import { constReducer } from './redux-root/reducers/constReducer';
// import { reservationsPageReducer } from './reducer';
// import { reservationPageMiddleware } from './middleware';
// import { undoable } from './redux-root/reducerEnhancers/undoable';
// import { stateFreezer } from './redux-root/reducerEnhancers/stateFreezer';
//
// import { guestCardMiddleware } from './pages/SummaryPage/components/viewCards/GuestCard/middleware';

const tempReducer = (state = initState, action) => {
  switch(action.type){
    default:
      return state;
  }
}
// shape the state structure
const rootReducer = combineReducers({
  tempReducer,
  form: formReducer,
});

// // create the feature middleware array
const featureMiddleware = [
  // reservationPageMiddleware,
  // guestCardMiddleware,
];

// // create the core middleware array
const coreMiddleware = [
  // actionSplitterMiddleware,
  // apiMiddleware,
  // loggerMiddleware,
];

// compose the middleware with additional (optional) enhancers,
// const enhancer = applyMiddleware(...featureMiddleware, ...coreMiddleware);
// create and configure the store
// export const store = createStore(stateFreezer(rootReducer), {}, enhancer);
export const store = createStore(rootReducer, {});
