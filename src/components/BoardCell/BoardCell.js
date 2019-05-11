import React from 'react';
import './BoardCell.css';

const BoardCell = (props) => (
    <div className="BoardCell">
        <img src={require("./images/x.png")} alt="Board Cell" onClick={props.handleClick} />
    </div>
);

export default BoardCell;