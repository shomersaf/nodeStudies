import { useState } from "react"

import { useAppSelector, useAppDispatch } from "../../app/hooks"
import {
    decrement,
    increment,
    incrementByAmount,
    incrementAsync,
    incrementIfOdd,
    selectCount,
    cleanHeader,
    fetchCountriesAsync
} from "./counterSlice"
import styles from "./Counter.module.css"

export function Counter() {
    const count = useAppSelector((state => state.counter.value))
    const header = useAppSelector((state => state.counter.someString))
    const cNumber = useAppSelector((state => state.counter.countruesLength))
    const dispatch = useAppDispatch()
    const [incrementAmount, setIncrementAmount] = useState("2")
 
    const incrementValue = Number(incrementAmount) || 0

    return (
        <div style={{background:"yellow"}}>
            <h2>AssyncOperationStatus component</h2>
            {"Countries number: " + cNumber || 0}
            <div className={styles.row}>
                <button
                    className={styles.button}
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    -
                </button>
                <span className={styles.value}>{header} {count}</span>
                <button
                    className={styles.button}
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    +
                </button>
            </div>
            <div className={styles.row}>
                <input
                    className={styles.textbox}
                    aria-label="Set increment amount"
                    value={incrementAmount}
                    onChange={(e) => setIncrementAmount(e.target.value)}
                />
                <button
                    className={styles.button}
                    onClick={() => dispatch(incrementByAmount(incrementValue))}
                >
                    Add Amount
                </button>
                <button
                    className={styles.asyncButton}
                    onClick={() => dispatch(incrementAsync(incrementValue))}
                >
                    Add Async
                </button>
                <button
                    className={styles.button}
                    onClick={() => dispatch(incrementIfOdd(incrementValue))}
                >
                    Add If Odd
                </button>
                <button
                    className={styles.button}
                    onClick={() => dispatch(cleanHeader())}
                >
                    Clean header
                </button>
            </div>
        </div>
    )
}
