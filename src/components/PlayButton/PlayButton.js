import React from 'react';
import { Link } from 'react-router-dom';
import './PlayButton.css';
import gameService from '../../utils/gameService';

const PlayButton = (props) => (
    <div className="PlayButton">
        <Link to='/game'><button className="PlayButton-button" onClick={gameService.createBoard}>Play!</button></Link>
    </div>
);

export default PlayButton;