import { QUOTES_AVAILABLE } from '../constant/' //Import the actions types constant we defined in our actions

let quoteState = {
    quotes: [],
    loading:true
};

export default quoteReducer = (state = quoteState, action) => {
    switch (action.type) {
        case QUOTES_AVAILABLE:
            state = Object.assign({}, state, { quotes: action.quotes, loading:false });
            return state;
        default:
            return state;
    }
};
