
import ReactDOM from 'react-dom/client'

import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { setupStore } from './store'
import { Provider } from 'react-redux'
import React from 'react'
import App from './App'

const store = setupStore()

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
<BrowserRouter>
<App />
</BrowserRouter>
</Provider>

)
