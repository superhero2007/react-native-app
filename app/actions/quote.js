import { QUOTES_AVAILABLE } from '../constant/' //Import the actions types constant we defined in our actions

// Get Data - READ (R)
export function getQuotes(){
    return (dispatch) => {
        fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }).then((response) => response.json())
            .then((responseJson) => {
                dispatch({type: QUOTES_AVAILABLE, quotes:responseJson.results});
            })
            .catch((error) => {
                console.error(error);
            });
    };
}