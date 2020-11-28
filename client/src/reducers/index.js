import { combineReducers } from 'redux';
import {visitsReducer} from './visitsReducer'
import {businessReducer} from './businessReducer'

export const rootReducer = combineReducers({
    visitsReducer, businessReducer
})