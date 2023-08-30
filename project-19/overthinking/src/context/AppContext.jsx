/* eslint-disable no-case-declarations */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */

import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_THOUGHT":
      return {
        ...state,
        thoughts: [...state.thoughts, action.payload],
      };
    case "DELETE_THOUGHTS":
      return {
        ...state,
        thoughts: [],
      };
    case "VIEW_THOUGHTS":
      const showThoughts = state.thoughts.map((thought) => ({
        ...thought,
        blur: !thought.blur,
      }));
      return {
        ...state,
        thoughts: showThoughts,
      };
    default:
      return state;
  }
};
const initialState = {
  thoughts: [],
};

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        thoughts: state.thoughts,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
