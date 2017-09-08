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
          winner: {
            value: null,
            line: null,
          },
        }],
        stepNumber: 0,
        xIsNext: true,
      };
    }

  handleClick(i, j) {
    const slicedHistory = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = slicedHistory[slicedHistory.length - 1];
    const squares = current.squares.slice().map((e) => e.slice());
    
    if (squares[i][j] || current.winner.value) {
      return;
    }

    squares[i][j] = this.state.xIsNext ? 'X' : 'O';
    const winner = calculateWinner(squares);
    const newHistory = slicedHistory.concat([{
        squares: squares,
        winner: winner,
      }]);

    this.setState({
      history: newHistory,
      stepNumber: newHistory.length - 1,
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
    const winner = current.winner;
    
    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares={current.squares}
            winner={winner}
            onClick={(i, j) => this.handleClick(i, j)}
          />
        </div>
        <div className="game-info">
          <Status
            winner={winner.value}
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
