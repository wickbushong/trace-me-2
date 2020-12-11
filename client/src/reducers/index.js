import { combineReducers } from 'redux';
import {visitsReducer} from './visitsReducer'
import {businessReducer} from './businessReducer'
import {reportReducer} from './reportReducer'
import {errorReducer} from './errorReducer'
import {userReducer} from './userReducer';

export const rootReducer = combineReducers({
    visits: visitsReducer, 
    business: businessReducer,
    report: reportReducer,
    user: userReducer,
    errors: errorReducer
})