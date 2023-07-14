import React from 'react'
import { InputText } from "primereact/inputtext";

const InputTextCom = (props) => {
  return (
    <div>
        {props.label?<label>{props.label}</label>:''}
         <span className="p-float-label">
              <InputText
                id={props.id}
                name={props.name}
                value={props.values}
                placeholder={props.placeholder}
                onChange={props.onChange}
              />
              <label htmlFor={props.id}>{props.label}</label>
            </span>
    </div>
  )
}

export default InputTextCom