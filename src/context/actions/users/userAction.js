import { REMOVE_USER } from "../../types";

const removeUser = (id) => (dispatch) =>{
    dispatch({
        type: REMOVE_USER,
        payload: id
    })
}


// add actions you want


export {removeUser, }