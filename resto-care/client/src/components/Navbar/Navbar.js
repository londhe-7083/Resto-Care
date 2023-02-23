import React, { useState } from 'react'
import "./Navbar.css"
import { myFoodListCount } from '../../util/myList'
import { Link } from 'react-router-dom'
import MyList from '../../views/MyList/MyList'


function myList(){
        window.location.href= "/MyList"
}


function Navbar({ user }) {
    const [foodItemCount, setFoodItemCount] = useState(myFoodListCount)
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-primary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">RestoCare 🍔</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>

                        </ul>
                        <form className="d-flex" role="search">

                            <h4 className='me-2 text-light'>Hello {user} </h4>

                            
                                <button type="button" class="btn btn-primary position-relative" onClick={myList}>
                                    My list
                                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        {foodItemCount}
                                        <span class="visually-hidden">unread messages</span>
                                    </span>
                                </button>
                            
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
