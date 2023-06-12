import React, {Component} from "react";
import './NavbarStyles.css'



class Navbar extends Component {

    
    render(){
        return (
            <nav>
                <img src= "./_MG_9174-Dec.jpg" alt="my-logo" ></img>

                <div>
                    <ul id="navbar-ul">
                        <li><a href="index.html">Birds</a></li>
                        <li><a href="index.html">Tigers</a></li>
                        <li><a href="index.html">Reptiles</a></li>
                        <li><a href="index.html">Others</a></li>
                        <li><a href="index.html">Blogs</a></li>
                    </ul>
                </div>
            </nav>
        ) 
    }
        
        
}

export default Navbar