import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { reset,setCounter} from "./../counter/counterSlice"
import styles from "./../counter/Counter.module.css"


export default function MainComponent() {
    const dispatch = useAppDispatch()
    const count = useAppSelector((state)=>state.counter.value)
    return <div>
        <h1>Main Component {count}</h1>
        <button className={styles.button} onClick={() => dispatch(reset())}>Reset</button>
        <button className={styles.button} onClick={() => dispatch(setCounter(100))}>Set to 100</button>
    </div>
}