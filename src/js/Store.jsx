import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise-middleware';
import reducers from './Reducers';

const middleware = applyMiddleware(promise(), thunk, createLogger());

export default createStore(reducers, composeWithDevTools(middleware));
