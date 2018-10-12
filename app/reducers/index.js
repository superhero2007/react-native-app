import { combineReducers } from 'redux';
import quoteReducer from './quote';

// Combine all the reducers
const rootReducer = combineReducers({
    quoteReducer
});

export default rootReducer;