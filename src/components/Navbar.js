import React, {useState} from 'react'
import logo from "../assets/logo.png";
import {Link} from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
    /*Svaki put kada promenimo stanje, sajt se ponovo renderuje,
    to ne moze sa obicnim promenljivama*/
    const [openBurger, setOpenBurger] = useState(false);

    const toggleBurger = () => {
        setOpenBurger(!openBurger);
    };

    return (
        <div className="navbar">
            <div className="leftSide" id={openBurger ? "open": "close"}>
                <Link to="/"><img src={logo} alt="logo" /></Link>
                <div className="burgerMenu">
                    <ul>
                        <li><Link to="/">POČETNA</Link></li>
                        <li><Link to="/menu">PONUDA</Link></li>
                        <li><Link to="/about">O NAMA</Link></li>
                        <li><Link to="/contact">KONTAKT</Link></li>
                    </ul>
                </div>
            </div>
            <div className="rightSide">
                <ul>
                    <li><Link to="/"> POČETNA </Link></li>
                    <li><Link to="/menu"> PONUDA </Link></li>
                    <li><Link to="/about"> O NAMA </Link></li>
                    <li><Link to="/contact"> KONTAKT </Link></li>
                </ul>
            </div>
            <div className="burger" onClick={toggleBurger}>
                &#9776; 
            </div>
        </div>
    );
}

export default Navbar