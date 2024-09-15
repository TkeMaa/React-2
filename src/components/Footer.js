import React from 'react'
import "../styles/Footer.css";
import {Link} from "react-router-dom";
import fbLogo from "../assets/facebookWhite.png";
import igLogo from "../assets/instagramWhite.png";
import ptLogo from "../assets/ptWhite.png";

function Footer() {
  return (
    <div className="footer">
        <div className="leftSide"><p>&copy; 2024. www.zdravizalogaji.com</p></div> 
        <div className="rightSide">
          <Link to="https://www.facebook.com/" target="_blank"><img src={fbLogo} alt="fb" /></Link>
          <Link to="https://www.instagram.com/" target="_blank"><img src={igLogo} alt="ig" /></Link>
          <Link to="https://www.pinterest.com/" target="_blank"><img src={ptLogo} alt="pt" /></Link>
        </div>
      </div>
  )
}

export default Footer
