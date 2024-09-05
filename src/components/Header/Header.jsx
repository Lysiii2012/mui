import React from "react";
import { Link } from "react-router-dom";  
import HomeIcon from "@mui/icons-material/Home"

const Header = () => { 

    return (
        <nav>
            <ul className="header">
                <li><HomeIcon color="secondary" /><Link to="/">Home</Link></li>
                <li><Link to="/todos">Todo</Link></li>
                <li><Link to="/swapi">Swapi</Link></li>
            </ul> 
        </nav>
    );
}

export default Header;
