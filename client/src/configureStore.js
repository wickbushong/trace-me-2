import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {rootReducer} from './reducers/index'

export default function configureStore(){
  const initialState = {
    business: {}
  }
  const store = createStore(rootReducer, initialState, compose(applyMiddleware(thunk), composeWithDevTools()))
  return store
}