import "./Home.css";
import {Link} from "react-router-dom"



function Home(){
    return (
        <div className="home">
        
           <h1>this is home   </h1>

           <Link to="/">Home</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/About">About</Link>
        </div>
    )
}

export default Home