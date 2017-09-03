import React from 'react';
import Board from '../Board';
import Status from '../Status';
import MovesList from '../MovesList';
import calculateWinner from '../../helpers/calculateWinner';

export default class Game extends React.Component {
    constructor() {
      super();
      this.state = {
        history: [{
          squares: new Array(3).fill(null).map(() => new Array(3).fill(null)),
        }],
        stepNumber: 0,
        xIsNext: true,
      };
    }
      
  handleClick(i, j) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice().map((e) => e.slice());
    if (calculateWinner(squares) || squares[i][j]) {
      return;
    }
    squares[i][j] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }
  
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }
  
  render() {
    const current = this.state.history[this.state.stepNumber];
    //console.log(this.state.stepNumber, history);
    //console.log(JSON.stringify(current, null, 4));
    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares={current.squares} 
            onClick={(i, j) => this.handleClick(i, j)}
          />
        </div>
        <div className="game-info">
          <Status
            winner={calculateWinner(current.squares)}
            xIsNext={this.state.xIsNext}
          />
          <MovesList
            history={this.state.history}
            current={current}
            onClick={(step) => this.jumpTo(step)}
          />
        </div>
      </div>
    );
  }
}
