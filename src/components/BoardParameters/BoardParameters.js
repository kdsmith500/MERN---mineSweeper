import React from 'react';
import './BoardParameters.css';

const BoardParameters = (props) => (
    <div className="BoardParameters">
        <div className="BoardParameters-parameters">
            <div className="BoardParameters-parameter">Width: <input type="text" min="2" max="100" value={props.w} /></div>
            <div className="BoardParameters-parameter">Height: <input type="text" min="2" max="100" value={props.h} /></div>
            <div className="BoardParameters-parameter">Mines: <input type="text" min="1" max="500" value={props.mines} /></div>
        </div>
        <div className="BoardParameters-dropdown">
            <button className="BoardParameters-button">{props.difficulty}</button>
            <div className="BoardParameters-options">
                <div onClick={props.handleBeginner}>Beginner</div>
                <div onClick={props.handleIntermediate}>Intermediate</div>
                <div onClick={props.handleExpert}>Expert</div>
                {/* <div onClick={props.handleCustom}>Custom</div> */}
            </div>
        </div>
        <br></br>
    </div>
);

export default BoardParameters;