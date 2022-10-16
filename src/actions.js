import { CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_FAILED, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS } from "./constants" //toto je 'good practise' dat si type do zvlast souboru a jako const, aby se hlasil error, pokud treba misspell


export const setSearchField = (text) => ({
    // type: 'CHANGE_SEARCH_FIELD',//misto string dam promennou
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const requestRobots = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING })
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
}