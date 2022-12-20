import "./about.css";

import {Link} from 'react-router-dom'

function About(){
    return (
        <div className="about">
            <h1>
                
               this is About page for me
            </h1>

            <Link to="/">Home</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/About">About</Link>
        </div>
    )
}

export default About