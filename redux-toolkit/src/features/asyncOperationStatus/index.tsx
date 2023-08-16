import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { increment, fetchCountriesAsync} from "../counter/counterSlice"
import { unwrapResult } from '@reduxjs/toolkit';
export default function AsyncOperationStatus() {
    const dispatch = useAppDispatch()
    const value = useAppSelector((state => state.counter.value))
    const cNumber = useAppSelector((state => state.counter.countruesLength))
    //const [cNumber,setcNumber] = useState()

    return <div style={{ background: "green", width: "100%" }}>
        <h2>AssyncOperationStatus component</h2>
        <div> <button onClick={() => {
            dispatch(increment())
        }}> incrementFromHere!!!!</button>
         {value || ""}</div>
        <div> <button onClick={() => {
          dispatch(fetchCountriesAsync())
        //   .then(unwrapResult)
        //   .then((result) => {
        //     console.log(result); // => 233
        //     setcNumber(result.length)
        //   })
     
        }}> get countries!!!!</button>
         {"Countries number: " + cNumber || 0}
    
         </div>
        
       
       
       
       
    </div>
}