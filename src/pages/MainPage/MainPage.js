import React from 'react';
import './MainPage.css';
import TitleBanner from '../../components/TitleBanner/TitleBanner';
import BoardParameters from '../../components/BoardParameters/BoardParameters';
import ScoresButton from '../../components/ScoresButton/ScoresButton';
import PlayButton from '../../components/PlayButton/PlayButton';

const MainPage = (props) => (
    <div className="MainPage">
        <TitleBanner className="MainPage-TitleBanner" />
        <BoardParameters
          w={props.w}
        //   customW={props.customW}
          h={props.h}
        //   customH={props.customH}
          mines={props.mines}
        //   customMines={props.customMines}
          difficulty={props.difficulty}
          handleBeginner={props.handleBeginner}
          handleIntermediate={props.handleIntermediate}
          handleExpert={props.handleExpert}
        //   handleCustom={props.handleCustom}
        />
        <div className="MainPage-buttons">
            <ScoresButton />
            <PlayButton
                handleCreateBoard={props.handleCreateBoard}
            />
        </div>
    </div>
);

export default MainPage;