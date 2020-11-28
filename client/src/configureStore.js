import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {rootReducer} from './reducers/index'

export default function configureStore(){
  const composedEnhancers = composeWithDevTools(applyMiddleware(thunk))
  const store = createStore(rootReducer, composedEnhancers)
  return store
}