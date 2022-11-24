import React from 'react'
import Home from './Pages/Home/Home'
import{BrowserRouter,Route, Routes} from 'react-router-dom'
import Projects from './Pages/Projects/Projects'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes >
          <Route path='/' element={<Home/>}/>
          <Route path='/projects' element={<Projects/>}/>
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App