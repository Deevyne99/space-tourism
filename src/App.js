import React from 'react'
//import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Crew from './pages/Crew'
import Destination from './pages/Destination'
import Technology from './pages/Technology'
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/crew' element={<Crew />} />

        <Route path='/destination' element={<Destination />} />
        <Route path='/technology' element={<Technology />} />
      </Routes>
    </Router>
  )
}

export default App
