import React, { useReducer } from "react";
import ContextFile from "./ContextFile";

const UseReducerwithuseContextEx = (props) => {
const initialState=0
  const reducer = (state, action) => {
    switch (action) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
        case "reset":
          return initialState;
      default:
        return state;
    }
  };
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <ContextFile.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      {props.children}
    </ContextFile.Provider>
  );
};

export default UseReducerwithuseContextEx;
