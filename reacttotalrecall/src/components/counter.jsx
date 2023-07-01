import React, { useState } from "react";
import MyButton from "../ui-components/button/myButton";


const Counter = function(){
    const [count, setCount] =useState(0)
    function increaseCount (){
        setCount(count+1)
      }
      function decreaseCount (){
       setCount(count-1)
      }
    return(
        <>
         <h2>{count}</h2>
       
       <div>
       <MyButton fn ={increaseCount} buttonText={`Increase`} />
       <MyButton fn ={decreaseCount} buttonText={`Decrease`} />
       </div>
            
         
        </>
       
    )
}
export default Counter