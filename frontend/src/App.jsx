import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Test from './pages/Test'

const App = () => {
  return (
      <Routes>
        <Route path='/test' element={<Test />}/>
      </Routes>
  )
}

export default App