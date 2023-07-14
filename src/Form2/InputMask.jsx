import React from "react";

const InputMask = (props) => {
  return (
    <div>
      {props.label ? <label>{props.label}</label> : ""}

      <span className="p-float-label">
        <InputMask
          id={props.id}
          unmask={props.unmask}
          mask={props.mask}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
        ></InputMask>
        <label htmlFor={props.id}>{props.label}</label>
      </span>
    </div>
  );
};

export default InputMask;
