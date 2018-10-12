import { combineReducers } from 'redux';
import quoteReducer from './quote';
import answerReducer from './answer';

// Combine all the reducers
const rootReducer = combineReducers({
    quoteReducer,
    answerReducer
});

export default rootReducer;