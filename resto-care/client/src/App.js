import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './views/Home/Home'
import Login from './views/Login/Login'
import Signup from './views/Signup/Signup'
import BookTable from './views/BookTable/BookTable'
import MyOrders from './views/MyOrders/MyOrders'
import MyList from './views/MyList/MyList'
import Profile from './views/Profile/Profile' 
function App() {
    return ( 
        <div>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/Login" element={< Login />} />
        <Route path="/Signup" element={< Signup />} />
        <Route path="/BookTable" element={<BookTable/>} />
        <Route path="/myOrders" element={<MyOrders/>} />
        <Route path="/MyList" element={<MyList/>} />
        <Route path="Profile" element={<Profile/>} />
        </Routes>
        </BrowserRouter>
        </div>
    )
}
export default App

// http://localhost:3000/login