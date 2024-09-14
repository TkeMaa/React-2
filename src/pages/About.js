import React from 'react'
import "../styles/About.css";
import pastry from "../assets/pastry.jpg";
/*
<div className="img" style={{ backgroundImage:`url(${pastry})` }} > </div>
*/

function About() {
  return (
    <div className="about">
        <div className="text">
            <h2>Dobrodošli u našu priču o zdravim zalogajima! </h2>
            <p>Naša prodavnica je nastala iz želje da pružimo poslastice koje su ne samo preukusne, već i potpuno prirodne, sirove i bez kompromisa kad je u pitanju zdravlje.</p>
            <p>Naša misija je jednostavna, <b><i>spojiti uživanje u hrani sa brigom o vašem telu.</i></b> Svi naši proizvodi su napravljeni bez šećera, a imamo i one bez mleka, jaja, glutena i brašna. Umesto toga, koristimo pažljivo birane, visokokvalitetne prirodne sastojke koji zadržavaju sve svoje nutritivne vrednosti.</p>
            <p>Naše torte, kolači i slaniši prave se s ljubavlju i pažnjom, tako da svaki zalogaj bude zdrav, hranljiv i pun energije. Tu smo da zajedno stvaramo zdraviji svet, kroz svaki zdrav i sladak zalogaj! </p>
        </div>
        <img src={pastry} alt="pastry" />
    </div>
  )
}

export default About