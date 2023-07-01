import React from "react";
import classes from "./inputType.module.css"

const InputType = React.forwardRef((props,ref) => {

    return(

     <input type={props.type} value={props.value} onChange={props.fn} placeholder={props.placeholder} />  

    )
})
export default InputType