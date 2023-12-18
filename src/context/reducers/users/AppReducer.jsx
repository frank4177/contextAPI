import { ADD_USER, EDIT_USER, REMOVE_USER } from "../../types";

export const appReducer = (state, action) => {
  switch (action.type) {
    case REMOVE_USER:
      return {
        ...state,
        users: state.users.filter((user) => {
          return user.id !== action.payload.id;
        }),
      };
    case ADD_USER:
      return { ...state, users: [...state.users, action.payload] };
    case EDIT_USER:
      return {
        ...state,
        users: state.users.map((item) => {
          return item.id === action.payload.id ? action.payload : item;
        }),
      };
    default:
      return state;
  }
};
