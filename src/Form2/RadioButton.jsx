import React from 'react'

const RadioButton = (props) => {
  return (
    <div>
          <RadioButton
                    inputId={props.key}
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange}
                  />
                  <label htmlFor={props.key}>
                    {props.name}
                  </label>
    </div>
  )
}

export default RadioButton