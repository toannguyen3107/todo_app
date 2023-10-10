import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Test from './pages/Test'
import About from './pages/About'
import Home from './pages/Home'
import Setting from './pages/Setting'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/setting' element={<Setting />} />
      {/* test code */}
      <Route path='/test' element={<Test />} />

    </Routes>
  )
}

export default App