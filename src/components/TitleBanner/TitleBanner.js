import React from 'react';
import './TitleBanner.css';

const TitleBanner = (props) => (
    <div className="TitleBanner">
        <span>MineSweeper</span>
        <div className="TitleBanner-blasts">
            <img src={require("./images/generic-blast.png")} alt="Generic Blast" height="35px" width="35px" />
            <img src={require("./images/generic-blast.png")} alt="Generic Blast" height="35px" width="35px" />
            <img src={require("./images/generic-blast.png")} alt="Generic Blast" height="35px" width="35px" />
            <img src={require("./images/generic-blast.png")} alt="Generic Blast" height="35px" width="35px" />
            <img src={require("./images/generic-blast.png")} alt="Generic Blast" height="35px" width="35px" />
            <img src={require("./images/generic-blast.png")} alt="Generic Blast" height="35px" width="35px" />
            <img src={require("./images/generic-blast.png")} alt="Generic Blast" height="35px" width="35px" />
        </div>
    </div>
);

export default TitleBanner;