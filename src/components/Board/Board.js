import React from 'react';
import './Board.css';
import BoardCell from '../BoardCell/BoardCell'

const Board = (props) => (
    <div className="Board" style={{width: props.w * 34 + 'px'}}>
        {props.cells.map((cell, idx) => (
            <BoardCell
                key={idx}
                cell={cell}
            />
        ))}
    </div>
);

export default Board;