import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Home from './Home'
const App = () => {
  return (

    <Router>
      <Routes>
        <Route path='/Home' element={<Home/>}/>
      </Routes>
    </Router>
    
  )
}

export default App