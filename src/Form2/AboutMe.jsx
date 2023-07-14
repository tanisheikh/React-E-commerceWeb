import React, { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";

const AboutMe = (props) => {
  return (
    <div>
      {props.label ? <label>{props.label}</label> : ""}

      <span className="p-float-label">
        <InputTextarea
          id={props.id}
          value={props.value}
          onChange={props.onChange}
          rows={props.rows}
          cols={props.cols}
          maxLength={props.maxLenght}

        />
        <label htmlFor={props.id}>{props.label}</label>
      </span>
    </div>
  );
};

export default AboutMe;
