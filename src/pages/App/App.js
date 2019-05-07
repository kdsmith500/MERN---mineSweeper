import React, { Component } from 'react';
import './App.css';
// import { Route, Switch, Redirect } from 'react-router-dom';
import GamePage from '../GamePage/GamePage';
import MainPage from '../MainPage/MainPage';
import NewScorePage from '../NewScorePage/NewScorePage';
import OutcomesPage from '../OutcomesPage/OutcomesPage';
import ScoresPage from '../ScoresPage/ScoresPage';

class App extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <GamePage />
        <MainPage />
        <NewScorePage />
        <OutcomesPage />
        <ScoresPage />
      </div>
    );
  }
}

export default App;
