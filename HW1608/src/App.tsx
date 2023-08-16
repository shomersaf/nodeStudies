import logo from "./logo.svg"
import { Counter } from "./features/counter/Counter"
import "./App.css"
import HeaderCounter from "./features/headerCounter/headerCounter"
import AsyncOperationStatus from "./features/asyncOperationStatus"

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <AsyncOperationStatus />
                <HeaderCounter />
                <Counter />
            </header>
        </div>
    )
}

export default App
