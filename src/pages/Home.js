import React from 'react'
import "../styles/Home.css";
import {Link} from "react-router-dom";
import background from "../assets/background.jpg";

function Home() {
  return (
    <div className="home">
        <div className="headerContainer" style={{ backgroundImage:`url(${background})` }}>
          <h1>Zdravi Zalogaji</h1>
          <p>Uživanje u hrani sa brigom o vašem telu</p>
          <Link to="/menu">
              <button>Saznajte više</button>
          </Link>    
        </div>
    </div>
  )
}

export default Home