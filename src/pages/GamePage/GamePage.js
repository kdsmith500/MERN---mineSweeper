import React from 'react';
import './GamePage.css';
import Board from '../../components/Board/Board';

const GamePage = (props) => (
    <div className="GamePage">
        <Board
            w={props.w}
            cells={props.cells}
        />
    </div>
);

export default GamePage;