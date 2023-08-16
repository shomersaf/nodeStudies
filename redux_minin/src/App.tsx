//import React from 'react'
import {Routes, Route} from 'react-router-dom'
import FavouritesPage from './pages/FavouritesPage/FavouritesPage'

import Navigation from './components/Navigation/Navigation'
import { HomePage } from './pages/HomePage/HomePage'


function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/favourites" element={ <FavouritesPage /> } />
      </Routes>
    </>
  )
}

export default App