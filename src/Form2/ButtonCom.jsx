import React from 'react'
import { Button } from 'primereact/button';

const ButtonCom= (props) => {
  return (
    <div>
        <Button type={props.type} label={props.label} onClick={props.onClick} />

    </div>
  )
}

export default ButtonCom;