import React from 'react'
import Home from './Pages/Home/Home'
import{BrowserRouter,Route, Routes} from 'react-router-dom'
import Projects from './Pages/Projects/Projects'
import Enquiry from './Pages/Enquiry/Enquiry'
import ExperiencePage from './Pages/ExperiencePage/ExperiencePage'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes >
          <Route path='/' element={<Home/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/enquiry' element={<Enquiry/>}/>
          <Route path='/experience' element={<ExperiencePage/>}/>
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App