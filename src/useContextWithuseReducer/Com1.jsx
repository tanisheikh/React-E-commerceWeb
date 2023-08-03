import React, { useContext } from "react";
import ContextFile from "./ContextFile";

const Com1 = () => {
  const contextData = useContext(ContextFile);
  console.log("contextData>>>", contextData);
  return (
    <div>
      <h1>{contextData.countState}</h1>
      <button
        type="button"
        onClick={() => contextData.countDispatch("increment")}
      >
        Increment
      </button>
      <button
        type="button"
        onClick={() => contextData.countDispatch("decrement")}
      >
        Decrement
      </button>
      <button type="button" onClick={() => contextData.countDispatch("reset")}>
        Reset
      </button>
    </div>
  );
};

export default Com1;
