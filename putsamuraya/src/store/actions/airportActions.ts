

import axios from 'axios'
import { AppDispatch } from '..'

export const fetchAirports = () =>{
    return async (dispatch:AppDispatch)=>{  
        try{
const response = await axios.get('airports')
console.log(response)
    }catch(e){

    }}
}