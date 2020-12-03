import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {rootReducer} from './reducers/index'

export default function configureStore(){
  const initialState = {
    business: null,
    visits: null,
    report: null,
    errors: null
  }
  const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)))
  return store
}