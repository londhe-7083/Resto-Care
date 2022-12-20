import "./contact.css"
import {Link} from 'react-router-dom'


function Contact(){
    return (
        <div className="contact">
            <h1>
           this is contact page
            </h1>

            <Link to="/">Home</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/About">About</Link>
        </div>
    )
}

export default Contact