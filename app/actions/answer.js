import { ADD_ANSWER, DELETE_ANSWERS } from '../constant/' //Import the actions types constant we defined in our actions

// Add Answer - CREATE (C)
export function addAnswer(answer){
    return (dispatch) => {
        dispatch({type: ADD_ANSWER, answer: answer});
    };
}

// Delete Answers - DELETE (D)
export function deleteAnswers(){
    return (dispatch) => {
        dispatch({type: DELETE_ANSWERS});
    };
}