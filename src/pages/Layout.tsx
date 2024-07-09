import "./Layout.css";
import {Link, Outlet } from "react-router-dom";

export function LayoutPage(){
    return (<>
    <nav>
    <ul>
    <li><Link to="/home" >Home</Link></li>
    <li><Link to="/blogs" >Blogs</Link></li>
    <li><Link to="/about" >About</Link></li>
    <li><Link to="/contact" >Contact</Link></li>
    <li><Link to="bookshelf">Bookshelf</Link></li>
    <li><Link to="/login">Log In</Link></li>
    <li><Link to="/signup">Sign Up</Link></li>
    </ul>
    </nav>
    <Outlet/>
    </>
    )
    }
