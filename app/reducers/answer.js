import { ADD_ANSWER, DELETE_ANSWERS } from '../constant/'

let answerState = {
    answers: []
};

export default answerReducer = (state = answerState, action) => {
    switch (action.type) {
        case ADD_ANSWER:{
            let answers =  cloneObject(state.answers); //clone the current state
            answers.push(action.answer); //add the new answer to the array
            state = Object.assign({}, state, { answers: answers});
            return state;
        }

        case DELETE_ANSWERS:{
            state = Object.assign({}, state, { answers: []});
            return state;
        }

        default:
            return state;
    }
};

function cloneObject(object){
    return JSON.parse(JSON.stringify(object));
}