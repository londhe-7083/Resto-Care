import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './views/Home'
import Login from './views/Login'
import Signup from './views/Signup'

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