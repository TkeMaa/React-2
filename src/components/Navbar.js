import React, {useState} from 'react'
import logo from "../assets/logo.png";
import {NavLink, Link} from "react-router-dom";
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
                <Link to="/" ><img src={logo} alt="logo" /></Link>
                <div className="burgerMenu">
                    <ul>
                        <li><NavLink to="/" className={({isActive}) => (isActive?"active":"")}>POČETNA</NavLink></li>
                        <li><NavLink to="/menu">PONUDA</NavLink></li>
                        <li><NavLink to="/about">O NAMA</NavLink></li>
                        <li><NavLink to="/contact">KONTAKT</NavLink></li>
                        <li><NavLink to="/cart">KORPA</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className="rightSide">
                <ul>
                    <li><NavLink to="/"> POČETNA </NavLink></li>
                    <li><NavLink to="/menu"> PONUDA </NavLink></li>
                    <li><NavLink to="/about"> O NAMA </NavLink></li>
                    <li><NavLink to="/contact"> KONTAKT </NavLink></li>
                    <li><NavLink to="/cart"> KORPA </NavLink></li>
                </ul>
            </div>
            <div className="burger" id={openBurger ? "openIcon" : "closeIcon"} onClick={toggleBurger}>
                &#9776; 
            </div>
        </div>
    );
}

export default Navbar