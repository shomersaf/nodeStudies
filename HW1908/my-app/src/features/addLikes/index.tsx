import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { RootState } from "../../app/store"
import styles from "./../counter/Counter.module.css"
import { useState,useEffect } from "react"
import { addLike } from "../vacations/vacationsSlice"
export default function AddLikes() {  
    const [destination, setAppDestination] = useState("")
    const [totalLikes, setTotalLikes] = useState(0)
    const dispatch = useAppDispatch()
  const vacations = useAppSelector((state)=>state.vacations.vacations)
  useEffect(() => {
    const likesOnly = vacations.map(v=>{return v.likes})
    let sum = likesOnly.reduce(function(a, b){
        return a + b;
    }, 0);
    setTotalLikes(sum)
    console.log(sum)
  }, [vacations]);

    return <div className="addLikesDiv">
    <h1>AddLikes</h1>
    <button className={styles.button} onClick={()=>{dispatch(addLike(destination?.toLowerCase()))}}>Add Likes</button>
     Vacation destination: <input type="text" value={destination} onChange={(e)=>{setAppDestination(e.target.value)}} />
     <h2>Total likes: <span className="likes">{totalLikes}</span> </h2>
    </div>
}