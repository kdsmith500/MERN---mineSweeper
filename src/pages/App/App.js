import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
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
      cells: null,
      revealed: null,
      placed: null
    }
  }

  // Pre-set game parameters
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

  // Game logic
  check = (x1, y1) => { /*>>>checks if the cells index it is called on exists in the game board, if it is it returns the value of the index in the board<<<*/
    if ((x1 >= 0) && (y1 >= 0) && (x1 < this.state.w) && (y1 < this.state.h))
        return this.state.board[x1 + y1 * this.state.w];
  }
  
  handleCreateBoard = () => { /*>>>this in the initialization function that creates the game board<<<*/
    if (this.state.mines > this.state.w * this.state.h) {
        return alert("You must define a board with enough room for your mines!");
    }
    this.state.remaining = this.state.mines;
    this.state.cells = []; /*>>>images are stored in here, index represents cells in area of board<<<*/
    this.state.board = []; /*>>>value representing whats hidden in the cells<<<*/
    this.state.revealed = []; /*>>>count of cellss revealed by player<<<*/
    this.state.placed = 0; /*>>>count of mines placed on generation of board<<<*/
    // this.main.style = `display: flex; width: ${this.state.w * 34}px;`;
    for (let i = 0; i < this.state.w * this.state.h; i++) { /*>>>this loops through the area of the board to create images representing each cells<<<*/
        this.state.cells[i] = document.createElement('img');
        // this.state.cells[i].src = "images/x.png";
        // this.state.cells[i].style = "height: 30px; width: 30px";
        // this.state.cells[i].addEventListener('mousedown', this.click);
        this.state.cells[i].id = i;
        // this.main.appendChild(this.state.cells[i]);
    }
    do {
        this.i = Math.floor(Math.random() * this.state.w * this.state.h); /*>>>this creates a random number inside the specified board area and asigns a mine until placed = mines<<<*/
        if (this.state.board[this.i] != 'mine') {
          this.state.board[this.i] = 'mine';
          this.state.placed++;
        }
    } while (this.state.placed < this.state.mines); /*>>>this is a nested for loop that runs as mines are placed and will iterate through every cells in the board<<<*/
    for (let x = 0; x < this.state.w; x++)
        for (let y = 0; y < this.state.h; y++) {
            if (this.check(x, y) != 'mine') { /*>>>each mine it encounters will cause it to call the check function on every adjacent cells and decide either 1 or 0 and sum the total, that total then becomes what occupies that cells<<<*/
              this.state.board[x + y * this.state.w] =
                    ((this.check(x, y + 1) == 'mine') | 0)
                    + ((this.check(x - 1, y + 1) == 'mine' && x !== 0) | 0)
                    + ((this.check(x + 1, y + 1) == 'mine' && x !== this.state.w) | 0)
                    + ((this.check(x, y - 1) == 'mine') | 0)
                    + ((this.check(x - 1, y - 1) == 'mine' && x !== 0) | 0)
                    + ((this.check(x + 1, y - 1) == 'mine' && x !== this.state.w) | 0)
                    + ((this.check(x - 1, y) == 'mine' && x !== 0) | 0)
                    + ((this.check(x + 1, y) == 'mine' && x !== this.state.w) | 0);
            }
        }
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/game' render={() =>
            <GamePage
              w={this.state.w}
              h={this.state.h}
              mines={this.state.mines}
              board={this.state.board}
              remaining={this.state.remaining}
              cells={this.state.cells}
              revealed={this.state.revealed}
              placed={this.state.placed}
            />
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
              handleCreateBoard={this.handleCreateBoard}
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
