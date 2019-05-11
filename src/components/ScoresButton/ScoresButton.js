import React from 'react';
import { Link } from 'react-router-dom';
import './ScoresButton.css';

const ScoresButton = (props) => (
    <div className="ScoresButton">
        <Link to='/scores'><button className="ScoresButton-button">Scores</button></Link>
    </div>
);

export default ScoresButton;