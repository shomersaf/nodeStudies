import React from "react";
import classes from "./myButton.module.css"
const MyButton = function(props){

    return(
         <button onClick={props.fn}>{props.buttonText}</button>
    )
}
export default MyButton