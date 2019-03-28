import { applyMiddleware, compose, createStore } from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';

const initialState = {};
const enhancers = [];
const middleware = [promise, thunk];

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers,
);

export const store = createStore(rootReducer, initialState, composedEnhancers);
