
import {Routes, Route} from 'react-router-dom'
import MainPage from './pages/MainPage'
import Auth from './pages/Auth'
import Details from './pages/Details'
import Navigation from './components/Navigation'

function App() {


  return (
  <>
    <Navigation />
    <Routes>
  <Route path="/" element ={<MainPage/>}/>
  <Route path="/auth" element ={<Auth/>}/>
  <Route path="/details/:id" element ={<Details/>}/>
</Routes>
  </>
  )
}

export default App
