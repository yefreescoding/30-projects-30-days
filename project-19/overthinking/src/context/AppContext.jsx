/* eslint-disable no-case-declarations */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */

import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_THOUGHT":
      const newThoughts = [...state.thoughts, action.payload];
      localStorage.setItem("thoughts", JSON.stringify(newThoughts)); // Save to localStorage
      return {
        ...state,
        thoughts: newThoughts,
      };
    case "DELETE_THOUGHTS":
      localStorage.removeItem("thoughts");
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
// const initialState = {
//   thoughts: [],
// };

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const storedThoughts = JSON.parse(localStorage.getItem("thoughts")) || [];
  const [state, dispatch] = useReducer(AppReducer, {
    thoughts: storedThoughts,
  });

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
