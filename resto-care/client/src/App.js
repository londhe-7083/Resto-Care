import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './views/Home/Home'
import Login from './views/Login/Login'
import Signup from './views/Signup/Signup'

function App() {
    return ( 
        <div>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/Login" element={< Login />} />
        <Route path="/Signup" element={< Signup />} />
        </Routes>
        </BrowserRouter>
        </div>
    )
}

export default App