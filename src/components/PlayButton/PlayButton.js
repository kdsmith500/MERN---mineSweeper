import React from 'react';
import { Link } from 'react-router-dom';
import './PlayButton.css';

const PlayButton = (props) => (
    <div className="PlayButton">
        <Link to='/game'><button className="PlayButton-button" onClick={props.handleCreateBoard}>Play!</button></Link>
    </div>
);

export default PlayButton;