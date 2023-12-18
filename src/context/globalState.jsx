import { createContext, useReducer } from "react";
import { ADD_USER, EDIT_USER, REMOVE_USER } from "./types";
import { appReducer } from "./reducers/users/AppReducer";
import { usersInitialState } from "./initialStates/usersInitialState";



// Create context
export const GlobalContext = createContext();

export const GlobalState = ({ children }) => {
  const [usersState, usersDispatch] = useReducer(appReducer, usersInitialState);
//   const [loginState, loginDispatch] = useReducer(aloginReducer, loginInitialState);
//   you can create more states for other stores like this

//  see this repo https://github.com/CryceTruly/truly-contacts-youtube/blob/master/src/context/Provider.js
// see here too https://github.com/candraKriswinarto/react-crud-context-api/blob/master/src/context/GlobalState.js

  // Actions (you can do actions like this or the folder way for larger builds)
  const addUser = (user) => {
    usersDispatch({
      type: ADD_USER,
      payload: user,
    });
  };

  const editUser = (update) => {
    usersDispatch({
      type: EDIT_USER,
      payload: update,
    });
  };

  return (
    <GlobalContext.Provider
      value={{ usersState, usersDispatch, addUser, editUser }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
