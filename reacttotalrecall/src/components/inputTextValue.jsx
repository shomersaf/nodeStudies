import React, { useState } from "react";
import InputType from "../ui-components/input/inputType";

const InputTextValue = function(){
  const [value, setValue] = useState("what?")
    return(
        <>
        <h2>{value}</h2>
     
     <InputType type={"text"} value={value} fn={event =>setValue(event.target.value)} />
        </>
    )
}
export default InputTextValue