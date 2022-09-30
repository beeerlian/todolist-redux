import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
const thunkMiddleware = thunk;

export default createStore(rootReducer, applyMiddleware(thunkMiddleware));