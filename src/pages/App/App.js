import React, { Component } from 'react';
import './App.css';
// import { Route, Switch, Redirect } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';

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
      </div>
    );
  }
}

export default App;
