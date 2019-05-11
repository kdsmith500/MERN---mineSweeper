import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
// import { Route, Switch, Redirect } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';
import NewScorePage from '../NewScorePage/NewScorePage';
import OutcomesPage from '../OutcomesPage/OutcomesPage';
import ScoresPage from '../ScoresPage/ScoresPage';
import GamePage from '../GamePage/GamePage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      w: 9,
      h: 9,
      mines: 10,
      difficulty: 'Beginner',
      board: null,
      remaining: null,
      cell: null,
      revealed: null,
      placed: null
    }
  }

  handleBeginner = () => {
    this.setState({ w: 9 });
    this.setState({ h: 9 });
    this.setState({ mines: 10 });
  };

  handleIntermediate = () => {
    this.setState({ w: 16 });
    this.setState({ h: 16 });
    this.setState({ mines: 40 });
  };

  handleExpert = () => {
    this.setState({ w: 16 });
    this.setState({ h: 30 });
    this.setState({ mines: 99 });
  };

  // handleCustom = () => {
  //   this.setState({ w: this.customW });
  //   this.setState({ h: this.customH });
  //   this.setState({ mines: this.customMines });
  // };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/game' render={() =>
            <GamePage />
          }/>
          <Route exact path='/' render={() =>
            <MainPage
              w={this.state.w}
              // customW={this.customW}
              h={this.state.h}
              // customH={this.customH}
              mines={this.state.mines}
              // customMines={this.customMines}
              difficulty={this.state.difficulty}
              handleBeginner={this.handleBeginner}
              handleIntermediate={this.handleIntermediate}
              handleExpert={this.handleExpert}
              // handleCustom={this.handleCustom}
            />
          }/>
          <Route exact path='/newscore' render={() =>
            <NewScorePage />
          }/>
          <Route exact path='/outcome' render={() =>
            <OutcomesPage />
          }/>
          <Route exact path='/scores' render={() =>
            <ScoresPage />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
