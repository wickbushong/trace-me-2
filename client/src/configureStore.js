import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {rootReducer} from './reducers/index'

export default function configureStore(){
  const initialState = {
    business: {},
    visits: [],
    report: {},
    errors: []
  }
  const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)))
  return store
}