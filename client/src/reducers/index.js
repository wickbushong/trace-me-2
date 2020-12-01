import { combineReducers } from 'redux';
import {visitsReducer} from './visitsReducer'
import {businessReducer} from './businessReducer'
import {reportReducer} from './reportReducer'

export const rootReducer = combineReducers({
    visits: visitsReducer, 
    business: businessReducer,
    report: reportReducer
})