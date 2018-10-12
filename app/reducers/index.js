import { combineReducers } from 'redux';

let dataState = {
    quotes: [],
    loading:true
};

const dataReducer = (state = dataState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};


// Combine all the reducers
const rootReducer = combineReducers({
    dataReducer
});

export default rootReducer;