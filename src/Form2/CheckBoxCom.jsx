import React from "react";

const CheckBoxCom = (props) => {
  return (
    <div>
      <Checkbox
        inputId={props.key}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        checked={props.checked}
      />
      <label htmlFor={props.key}>{props.name}</label>
    </div>
  );
};

export default CheckBoxCom;




